import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const submit = createAsyncThunk("forget",
async({password,token,route})=>{
    try{
        const response =await axios.post(
            "http://localhost:8081/unsecure/user/setpwd",
            {
                password: password, 
                token:token
            }
        );
        if (response) {
            console.log("sucess")
            // localStorage.setItem("token",response?.data?.data?.jwt)
             route('/main');
            // return response.data;
          }
    }
    catch (error) {
        throw Error("Failed to fetch data");
      }
}

);

const resetSlice = createSlice({
    name: "forget",
    initialState: {
     
    },
  
    reducers: {},
  });
  
  export default resetSlice.reducer;