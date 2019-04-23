import * as types from './actionTypes';
import Utility from '../../services/Utility';
import axios from 'axios';
import Constants from '../../assets/Constants';
import appActions from '../app/actions';
import Contest from './../../services/Contest/Contest';

const setUploadCount = uploadCount => ({
    type: types.CONTEST_UPLOAD_COUNT,
    uploadCount,
});

const addEntry = entry => ({
    type: types.CONTEST_ADD_ENTRY,
    entry,
});

const setAssetUploading = isUploading => ({
    type: types.CONTEST_IS_UPLOADING,
    isUploading,
});

const setEntryFilePath = entryFilePath => ({
    type: types.CONTEST_ENTRY_FILE_PATH,
    entryFilePath,
});

const setContestFeed = feed => ({
    type: types.CONTEST_SET_CONTEST_FEED,
    feed,
})

const setContestData = data => ({
    type: types.CONTEST_SET_DATA,
    data,
})

const getContest = (slug) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.getContest(slug)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(setContestData(response.data))
                }
            })
            .catch( error => {
                console.log(error)
            })
    }
}

function uploadMedia (token, form) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application',
        'Authorization': 'Bearer ' + token,
    }
    return dispatch => {
        dispatch(setAssetUploading(true));
        dispatch(setUploadCount(0));
        axios.post(Constants.BASE_URL + 'api/upload-entry-media', form, {
            headers: headers,
            onUploadProgress: progressEvent => {
                if(progressEvent.lengthComputable) {
                    const count = Utility.progress(progressEvent);
                    dispatch(setUploadCount(count));
                }
            }
        }).then( response => {
            dispatch(setAssetUploading(false));
            if(response.data && !response.error)
                dispatch(setEntryFilePath(response.data.data.path));
        }).catch( error => {
            dispatch(setAssetUploading(false));
            console.log(error);
        });
    }
};

const handleAddEntry = (form, token) => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.addEntry(form, token)
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                dispatch(setEntryFilePath(""));
                const entry = response.data;
                if(!response.error) {
                    dispatch(addEntry(entry));
                }
            })
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                dispatch(setEntryFilePath(""));
                console.log(error);
            })
    }
};

const getContestFeed = () => {
    return dispatch => {
        dispatch(appActions.appIsLoading(true));
        Contest.getContestFeed()
            .then( response => {
                dispatch(appActions.appIsLoading(false));
                if(!response.error) {
                    dispatch(setContestFeed(response.data));
                }
            } )
            .catch( error => {
                dispatch(appActions.appIsLoading(false));
                console.log(error);
            } )
    }
}

function setDefault() {
    return dispatch => {
        dispatch(setUploadCount(0));
        dispatch(addEntry({}));
        dispatch(setAssetUploading(false));
        dispatch(setEntryFilePath(""));
        dispatch(setContestFeed({}));
        dispatch(setContestData({}));
    }
}

const contestActions = {
    setAssetUploading,
    setUploadCount,
    addEntry,
    uploadMedia,
    getContest,
    handleAddEntry,
    setContestFeed,
    getContestFeed,
    setDefault,
};

export default contestActions;