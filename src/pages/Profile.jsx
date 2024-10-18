import { Avatar, Button, Card, Flex, Typography } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Profile = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { userData, logout } = useAuth();
  

  // Generate a random cartoonish avatar URL with the Avataaars style
  const generateAvatarUrl = () => {
    const randomId = Math.floor(Math.random() * 10000); // Generate a random number for unique avatars
    return `https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=BeardMedium&clotheType=ShirtCrewNeck&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light`;
  };

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} src={generateAvatarUrl()} className="avatar" />
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

export default Profile;
