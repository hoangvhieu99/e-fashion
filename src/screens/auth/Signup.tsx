import { Button, Card, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };
  return (
    <div className="w-100">
    <Card>
      <div className="text-center">
        <Title level={2}>Create an account!!!</Title>
        <Paragraph type="secondary">
         Start your 30-day free trial
        </Paragraph>
      </div>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
        disabled={isLoading}
        size="large"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please enter your name!!!",
            },
          ]}
        >
          <Input allowClear maxLength={100} placeholder="Enter your name"/>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your Email!!!",
            },
          ]}
        >
          <Input allowClear maxLength={100} type="email" placeholder="Enter your email"/>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!!!",
            },
          ]}
        >
          <Input.Password maxLength={100} placeholder="Create a password"/>
      <Paragraph type="secondary">Must be at least 8 characters.</Paragraph>
        </Form.Item>
      </Form>
      <div className="mt-4 mb-3">
        <Button onClick={()=> form.submit()} type="primary" style={{ width: "100%" }} size="large">
         Get started
        </Button>
      </div>
      <SocialLogin/>
      <div className="mt-4 text-center">
        <Space>
          <Text>Already have an account?</Text>
          <Link to="/">Log in</Link>
        </Space>
      </div>
    </Card>
  </div>
  )
}

export default SignUp