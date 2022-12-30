import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/img/background.jpg";
import styles from "./Login.module.scss";
import { useAppContext } from "../context/RequiredAuth/authContext";

const Login = () => {
    const navigate = useNavigate();

    const [isMsgError, setIsMsgError] = useState(false);
    const { setIsLogin } = useAppContext();
    const onFinish = async (values) => {
        if (
            values.username === user.username &&
            values.password === user.password
        ) {
            setIsLogin(true);
            localStorage.setItem("isLogin", true);
            navigate("/");
        } else {
            setIsMsgError(true);
            localStorage.setItem("isLogin", false);
        }
    };

    const user = {
        username: "nvhoan",
        password: "Admin@123",
    };
    return (
        <div
            className={styles.loginPage}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <Card className={styles.loginForm}>
                <div className={styles.header}>
                    <h1>Login</h1>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    {isMsgError && <div className="msgError">Username or password is wrong</div>}

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
