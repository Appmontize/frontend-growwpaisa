import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, Button, Card, Typography, Flex } from "antd";
import { WalletOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const WalletPage = () => {
  const navigate = useNavigate();
  const { userWallet, logout } = useAuth();

  // Format wallet amount to two decimal places
  const formattedWallet = userWallet ? userWallet.toFixed(2) : '0.00';

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} icon={<WalletOutlined />} className="avatar" />
        <Typography.Title level={1} strong className="username">
          My Wallet
        </Typography.Title>
        <Typography.Text type="secondary">
          Available Amount: {formattedWallet} Coins
        </Typography.Text>
        <Typography.Text type="secondary">
          Minimum Amount to Claim: 1000.00 Coins
        </Typography.Text>
        <Typography.Text type="secondary">
          Coins Conversion: 100 coins = 1 INR
        </Typography.Text>
      </Flex>

      <Button size="large" type="primary" className="profile-btn">
        Claim in UPI
      </Button>

      {/* Red message below the button */}
      <p className="text-red-500 mt-2 font-bold text-center">
        (Claim in UPI is coming shortly, till then earn as much coins as you can.)
      </p>
    </Card>
  );
};

export default WalletPage;
