// import React, { useEffect } from "react";
import { Dropdown, Progress, Space } from "antd";
import { DownOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { useDispatch } from "react-redux";
import { LeftCircleOutlined } from '@ant-design/icons';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Uploaded from "../upload/index.js";
// import { Fileupload } from "../../slice/fileuploadSlice";
// import { useState } from "react";
const Header = () => {
  // const [uploadfile,setUploadfile]=useState()
  // const dispatch=useDispatch()
  const navigate=useNavigate()
 const handilelogout=()=>
 {

  localStorage.removeItem('token')
  navigate('/main')
 }
 //file upload
//  const handilesub=(event)=>{
//   setUploadfile(event.target.files[0]);
//   // console.log("values",uploadfile)
//     // dispatch(forgetpass( values?.email,navigate));
//  }

 
//


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

  // useEffect(() => {
  //   //progress bar function
  //   if (progress > 0) {
  //     const intervalId = setInterval(() => {
  //       if (progress >= 99) {
  //         clearInterval(intervalId); // Clear the interval when progress reaches 99
  //       } else {
  //         setProgress(progress + 1);
  //       }
  //     }, 500);

  //     // Cleanup function to clear the interval when the component unmounts
  //     return () => clearInterval(intervalId);
  //   }
  // }, [progress]);


  // const props = {
  //   name: "file",
  //   action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  return (
    <div >
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
        {/* <div style={{display:'flex',flexDirection:'column'}}>
        <form >
  <input type="file" id="myFile" name="file" value={uploadfile}/>
  <input onClick={handilesub} type="submit"/>
</form>
{/* {progress > 0 && ( */}
              {/* <Progress
                // percent={progress}
                status="active"
                style={{ marginTop: "9px", height: "20px"  ,backgroundColor:'wheat'}}
              strokeWidth={18}
              /> */}
            {/* )} */}
        {/* </div> */} 
        <Uploaded/>
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
        
        <Button type="primary" onClick={handilelogout} icon={<LeftCircleOutlined />} size={"large"} style={{background:'white',color:'black'}}>
      Logout
    </Button>
      </div>
      
    </div>
  );
};

export default Header;
