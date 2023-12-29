import React from "react";
import { Button, Card, Form, Input } from "antd";
import { Link } from "react-router-dom";

// styling
import "../App.css";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>

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
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="sign-up-form cfb"
        labelAlign="left"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input style={{ height: "40px" }} placeholder="Enter your email" />
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
              to="/forgetPassword"
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
    </div>
  );
};

export default SignIn;
