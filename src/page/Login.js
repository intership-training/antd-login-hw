import React, { useState } from 'react'
import { Button, Card, Col, Input, Row, Form, Checkbox, Space, Avatar, Typography, message, Modal, Tooltip } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Text } = Typography
export const Login = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const success = () => {
        message.success('This is a success homework!');
        navigate('/dashboard')
      };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className = "login-page">
            <Card>
                <Form
                    name="normal_login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item>
                        <Row>
                            <Col span={24}>
                                <Avatar size="large" icon={<UserOutlined />} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Text>ACCOUNT LOGIN</Text>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input 
                                placeholder="Username" 
                                prefix={<UserOutlined />}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input.Password
                                placeholder='Password'
                                prefix={<LockOutlined />}
                                type="password"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox> Remember me </Checkbox>
                        </Form.Item>
                            <Tooltip title="Again!?"> 
                                <a href=""> Forgot password </a>
                            </Tooltip>
                    </Form.Item>

                    <Form.Item>
                        <Space size={'small'}>
                            <Button type="primary" ghost htmlType="submit" onClick={success}>
                                Log in
                            </Button>
                            Or
                            <Button onClick={showModal} type="primary" ghost>
                                Register now!
                            </Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <p>Register completed!</p>
                            </Modal>
                            </Space>                            
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
