import { UploadFile } from "antd";
import Upload from "antd/es/upload/Upload";

type fileListContainerProps = {
  fileList: UploadFile[];
  removeFileFromFileList: (fileToBeDeleted: UploadFile) => void;
};
export const FileListContainer = (props: fileListContainerProps) => (
  <Upload
    fileList={props.fileList}
    listType="picture"
    onChange={(fileInfo) => props.removeFileFromFileList(fileInfo.file)}
  />
);
