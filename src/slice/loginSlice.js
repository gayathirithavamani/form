// In your slice file (e.g., dataSlice.js)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from 'antd';
// Assuming you're using Axios for HTTP requests
import axios from "axios";

// Define an async thunk for fetching data from the API
export const login = createAsyncThunk(
  "api",
  async ({ email, password, route,setLoading }) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/unsecure/basiclogin",
        {
          email: email,
          password: password,
        }
      );
     
      if (response?.data?.success==true) {
        localStorage.setItem("token",response?.data?.data?.jwt)
        notification.success({
          message: 'Login Success',
          description: response?.data?.message,
        });
        route("/home");
        // return response.data;
      }
      else{
        console.log("res",response?.data?.message)
        notification.error({
          message: 'Login Failed',
          description: response?.data?.message,
        });
      }
    } catch (error) {
      throw Error("Failed to fetch data");
    }
  }
);


const dataSlice = createSlice({
  name: "login",
  initialState: {
   
  },

  reducers: {},
});

export default dataSlice.reducer;
