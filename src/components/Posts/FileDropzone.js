import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`
const StyledP = styled.p`
  padding: 1em;
  background-color: #efefef;
  border-radius: 10px;
  opacity: 0.8;
  color: #04a294;
`

function FileDropzone(props) {
    console.log(props);
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      //console.log(this.innerRef);
      props.setImageUrl(binaryStr);
      let form = new FormData();
      form.append('mediafile', acceptedFiles[0]);
      form.append('filename', 'mf' + Date.now());
      props.setFormdata(form);
      
    }

    //acceptedFiles.forEach(file => console.log((new FileReader(file).onload = () => console.log(this.result))))
    reader.readAsDataURL(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <StyledDiv {...getRootProps({refKey: 'innerRef'})} imageurl={props.imageurl}>
        <input {...getInputProps()} />
        <StyledP>Drag 'n' drop some files here, or click to select files</StyledP>
    </StyledDiv>
  )
}

export default FileDropzone;