
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const FormSlice = createAsyncThunk("forget",
async(formdat)=>{
    try{
        const response =await axios.post(
            "http://localhost:8081/medicare/save",
            {
              formdat 
            }
        );
        if (response) {
            console.log("sucess")
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

const formSlice = createSlice({
    name: "forget",
    initialState: {
     
    },  
  
    reducers: {},
  });
  
  export default formSlice.reducer;
