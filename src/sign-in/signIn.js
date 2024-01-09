import React, { useState } from "react";
import { Button,  Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {forgetpass} from "../slice/forgetpass";
// styling
import "../App.css";
import { useDispatch } from "react-redux";
import { login } from "../slice/loginSlice";
import { createRoot } from 'react-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const [inn,setInn]=useState(true)
  const [forget,setForget]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handilforget=()=>{
    setInn(false)
    setForget(true)
  }

  const onforget = (values) => {
    // navigate("/reset")

    console.log("values",values)
    dispatch(forgetpass( values?.email,setInn,setForget));
    setInn(true)
    setForget(false)
  };

  const onFinish = (values) => {
    
    dispatch(login({ email: values?.email, password: values?.password,route:navigate,setLoading }));
    
  };

  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      {inn &&
          <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="sign-up-form cfb"
          labelAlign="left"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
                
              },
              {
                type: 'email',
                message: 'Please enter a valid Email!',
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input style={{ height: "40px" }} placeholder="Enter your email"/>
          </Form.Item>
  
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input.Password
              style={{ height: "40px" }}
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <span>
              <Link
              onClick={handilforget}
                // to="/forgetPassword"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "330px",
                }}
              >
                Forgot Password?
              </Link>
            </span>
          </Form.Item>
  
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      }
      {forget&&
       <Form
       name="basic"
       labelCol={{
         span: 8,
       }}
       wrapperCol={{
         span: 16,
       }}
       style={{
         maxWidth: 600,
       }}
       initialValues={{
         remember: true,
       }}
       onFinish={onforget}
       // onFinishFailed={onFinishFailed}
       autoComplete="off"
     >
       <Form.Item
         label="Email"
         name="email"
         rules={[
           {
             required: true,
             message: "Please input your Email!",
           },
         ]}
       >
         <Input />
       </Form.Item>

       <Form.Item
         wrapperCol={{
           offset: 8,
           span: 16,
         }}
       >
         <Button type="primary" htmlType="submit" style={{width:'100%'}}>
           Reset Password
         </Button>
       </Form.Item>
     </Form>

      }
      {loading &&
         <Spin
         indicator={
           <LoadingOutlined
             style={{
               fontSize: 40,
             }}
             spin
           />
         }
       />
      }
     
      
    </div>
  );
};

export default SignIn;
