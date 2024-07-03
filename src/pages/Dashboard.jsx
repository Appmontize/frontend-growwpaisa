import { Avatar, Button, Card, Flex, Typography } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} icon={<UserOutlined />} className="avatar" />
        <Typography.Title level={1} strong className="username">
          {userData.name}
        </Typography.Title>
        <Typography.Text type="secondary" strong>
          Email: {userData.email}
        </Typography.Text>
        <Typography.Text type="secondary">
          Role: {userData.role}
        </Typography.Text>
      </Flex>
      <Button
        size="large"
        type="primary"
        className="profile-btn"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Card>
  );
};

export default Dashboard;
