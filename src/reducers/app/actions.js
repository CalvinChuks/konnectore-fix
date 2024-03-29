import * as types from './actionTypes';

const appIsLoading = isLoading => ({
   type: types.APP_IS_LOADING,
   isLoading ,
});

const operationComplete = operation => ({
    type: types.APP_OPERATION_COMPLETE,
    operation,
});

const addData = data => ({
    type: types.APP_ADD_DATA,
    data
});

const setContext = context => ({
    type: types.APP_SET_CONTEXT,
    context,
});

function setDefault() {
    return dispatch => {
        dispatch(appIsLoading(false));
        dispatch(addData({}));
    }
}

const appActions = {
    appIsLoading,
    operationComplete,
    setDefault,
    addData,
    setContext,
};

export default appActions;