import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import "./styles.css";

const Header = () => {
  const items = [
    {
      label: "PDF",
      key: "0",
    },
    {
      label: "CSV",
      key: "1",
    },
    {
      label: "EXCEL",
      key: "2",
    },
  ];

  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <h1>Upload Form</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Upload {...props} className="button1">
            <Button icon={<UploadOutlined />}>Import</Button>
          </Upload>
        </div>
        <div>
          <label for="fname">Facility:</label>
          <input type="text" id="fname" name="fname" className="inputtype" />

          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="color"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Export
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
