
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const forgetpass = createAsyncThunk("forget",
async(email)=>{
    try{
        const response =await axios.post(
            "http://localhost:8081/unsecure/user/forgotpassword",
            {
              email: email, 
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

const forgetSlice = createSlice({
    name: "forget",
    initialState: {
     
    },
  
    reducers: {},
  });
  
  export default forgetSlice.reducer;
