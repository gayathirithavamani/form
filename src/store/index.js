import { configureStore } from "@reduxjs/toolkit";
import dataSlice from '../slice/loginSlice'
import forgetSlice from '../slice/forgetpass'
import resetSlice from '../slice/submit'
import fileuploadSlice from "../slice/fileuploadSlice";
import formSlice from "../slice/formSlice";
export const store = configureStore({
  reducer: {
    login: dataSlice,
    forget:forgetSlice,
    reset:resetSlice,
    upload:fileuploadSlice,
    formdata:formSlice
  },
});