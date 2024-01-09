import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Fileupload } from "../../slice/fileuploadSlice";
import { Progress } from 'antd';
const Uploaded=()=> {
    const [uploadfile,setUploadfile]=useState()
    const dispatch=useDispatch()
    const[progress,setProgress]=useState(1)
    const handilesub=(event)=>{
        setUploadfile(event.target.files[0]);
        // console.log("values",uploadfile)
        //   dispatch(forgetpass( values?.email,navigate));
       }
       const handileupdate= async () => {
        console.log(uploadfile)
        // if (!uploadfile) {
        //   console.error("No file selected");
        //   return;
        // }
        // //upload api
        // else{
        //   const formData = new FormData();
        //   formData.append("file", uploadfile);
        //   console.log(uploadfile)
        //   // dispatch(Fileupload( uploadfile,setProgress));
        //   // setProgress(1);
    // }
}
     

useEffect(() => {
    //progress bar function
    if (progress > 0) {
      const intervalId = setInterval(() => {
        if (progress >= 99) {
          clearInterval(intervalId); // Clear the interval when progress reaches 99
        } else {
          setProgress(progress + 1);
        }
      }, 500);

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [progress]);
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <form>
<input type="file" 
id="myFile" 
name="file" 
onChange={handilesub}
// ref={fileInputRef}
/>
<input  onClick={handileupdate} type="submit"/>
</form>
{/* {progress > 0 && ( */}
          <Progress
            // percent={progress}
            status="active"
            style={{ marginTop: "9px", height: "20px"  ,backgroundColor:'wheat'}}
          // strokeWidth={18}
          />
        {/* )} */}
    </div>
  )
}

export default Uploaded