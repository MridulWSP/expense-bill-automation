import { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { FileListContainer } from "./FileListContainer";
import { Button, UploadFile } from "antd";
import { ImageUploaderContainerStyles } from "./ImageUploaderStyles.css";

export const ImageUploaderContainer = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
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
          console.log(`Base64 String : ${base64}`);
          // dispatch action to call AI Model -> save response in
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
        <div style={ImageUploaderContainerStyles.uploaderContainer}>
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
        <div>
          <Button onClick={getBase64Data}>Generate Invoice Data</Button>
        </div>
      )}
    </>
  );
};
