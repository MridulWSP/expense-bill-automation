import { InboxOutlined } from "@ant-design/icons";
import { UploadFile, UploadProps } from "antd";
import Dragger from "antd/es/upload/Dragger";

type ImageUploaderProps = {
  addFileToFileList: (file: UploadFile) => void;
};

export const ImageUploader = (props: ImageUploaderProps) => {
  const imageUploadProps: UploadProps = {
    name: "file",
    headers: {
      authorization: "auth-text",
    },
    showUploadList: false,
    onChange(info) {
      const dummyObj = {
        ...info.file,
      };
      dummyObj.status = "done";
      props.addFileToFileList(dummyObj);
    },
    onDrop(event) {
      console.log("Dropped Files ", event.dataTransfer.files);
    },
    style: {
      height: "10rem",
    },
  };
  return (
    <Dragger {...imageUploadProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
};
