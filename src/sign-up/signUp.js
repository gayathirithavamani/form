import React from "react";
import { Button, Form, Input } from "antd";

// styling
import "../App.css";

const SignUp = () => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("The two passwords do not match"));
    },
  });

  return (
    <div className="form-comp cfb">
      <h1>Create an Account!</h1>

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
          label="firstname"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input
            style={{ height: "40px" }}
            placeholder="enter your FirstName"
          />
        </Form.Item>

        <Form.Item
          label="lastname"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input style={{ height: "40px" }} placeholder="enter your LastName" />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input style={{ height: "40px" }} placeholder="enter your Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              pattern: passwordRegex,
              message:
                "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input.Password
            style={{ height: "40px" }}
            placeholder="enter your password"
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match")
                );
              },
            }),
          ]}
          style={{ width: "100%" }}
        >
          <Input.Password
            style={{ height: "40px" }}
            placeholder="enter your password"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Create User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
