
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const Fileupload  = createAsyncThunk("forget",
async(file,setProgress)=>{
    try{
        const response =await axios.post(
            "http://localhost:8081/medicare/fileupload",
            {
              file: file, 
            },{
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        );
        if (response) {
            console.log("sucess")
            setProgress(100)
            // localStorage.setItem("token",response?.data?.data?.jwt)
            //  route("/home");
            // return response.data;
          }
    }
    catch (error) {
        throw Error("Failed to fetch data");
      }
}

);

const fileuploadSlice = createSlice({
    name: "upload",
    initialState: {
     
    },
  
    reducers: {},
  });
  
  export default fileuploadSlice.reducer;
