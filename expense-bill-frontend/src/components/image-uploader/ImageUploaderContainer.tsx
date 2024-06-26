import { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { FileListContainer } from "./FileListContainer";
import { Button, UploadFile } from "antd";
import { ImageUploaderContainerStyles } from "./ImageUploaderStyles.css";
import { FileTextFilled, LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { fetchData } from "../../features/generateDataSlice";
import {AppDispatch } from '../../store';

export const ImageUploaderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const showFileListContainer = fileList.length > 0;
  const addFileToFileList = (file: UploadFile) => {
    const existingFile = fileList.find(
      (fileInList: UploadFile) => fileInList.uid === file.uid
    );
    if (!existingFile) setFileList((oldState) => [...oldState, file]);
  };
  const removeFileFromFileList = (fileToBeDeleted: UploadFile) => {
    setFileList((oldState: UploadFile[]) => {
      return oldState.filter(
        (file: UploadFile) => file.uid !== fileToBeDeleted.uid
      );
    });
  };
  const getBase64Data = () => {
    fileList.forEach((file: UploadFile) => {
      const originFile = file?.originFileObj;
      if (originFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result?.toString().split(",")[1];
          // dispatch action to call AI Model -> save response in
          dispatch(fetchData());
          setIsLoading(true);
          // for mocking the api call loading behavior
          setTimeout(() => {
            console.log(`Base64 String : ${base64}`);
            setIsLoading(false);
          }, 2000);
        };
        reader.onerror = (error) => {
          console.log(`Error handling file: ${error}`);
        };
        reader.readAsDataURL(originFile);
      }
    });
  };

  return (
    <>
      <div style={ImageUploaderContainerStyles.imageUploaderParentContainer}>
        <div
          style={
            showFileListContainer
              ? ImageUploaderContainerStyles.uploaderContainerShrink
              : ImageUploaderContainerStyles.uploaderContainer
          }
        >
          <ImageUploader addFileToFileList={addFileToFileList} />
        </div>
        {showFileListContainer && (
          <div style={ImageUploaderContainerStyles.fileListContainer}>
            <FileListContainer
              fileList={fileList}
              removeFileFromFileList={removeFileFromFileList}
            />
          </div>
        )}
      </div>
      {showFileListContainer && (
        <div style={ImageUploaderContainerStyles.buttonContainer}>
          <Button
            type="primary"
            size="large"
            icon={isLoading ? <LoadingOutlined /> : <FileTextFilled />}
            onClick={getBase64Data}
          >
            Generate Invoice Data
          </Button>
        </div>
      )}
    </>
  );
};
