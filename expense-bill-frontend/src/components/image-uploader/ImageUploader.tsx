import { PlusOutlined } from "@ant-design/icons";
import { Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";

export const ImageUploader = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const UploadButton = (
    <button style={{ border: 0, background: "none" }}>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => setFileList(newFileList);

  const getImagesData = () => {
    console.log(fileList);
  };

  return (
    <>
      <Upload listType="picture-card" onChange={handleImageChange}>
        {UploadButton}
      </Upload>
      <button onClick={getImagesData}>Get Invoice Data</button>
    </>
  );
};
