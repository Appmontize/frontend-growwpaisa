import { Avatar, Button, Card, Flex, Typography } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { UserOutlined, WalletOutlined  } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; 

const WalletPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    navigate("/");
    await logout();
  };

  // Check if userData exists before accessing its properties
  if (!userData) {
    // You can return a loading indicator or handle this case as per your UI needs
    return <div>Loading...</div>;
  }

  return (
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} icon={<WalletOutlined  />} className="avatar" />
        <Typography.Title level={1} strong className="username">
          My Wallet
        </Typography.Title>
        <Typography.Text type="secondary">
          Available Amount: 0.00 Coins
        </Typography.Text>
        <Typography.Text type="secondary">
          Minimum Amount Withdrawn: 0.00 Coins
        </Typography.Text>
      </Flex>
      <Button
        size="large"
        type="primary"
        className="profile-btn"
        
      >
        Claim in UPI
      </Button>
    </Card>
  );
};

export default WalletPage;
