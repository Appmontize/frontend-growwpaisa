// FeatureDetailsLoan.js

import React from 'react';
import { Typography } from 'antd';
import FeatureBox from './FeatureBox';
import fimage1 from '../images/AngelOne.png';
import fimage8 from '../images/groww.png';
import { useEffect, useState } from 'react';
import {useAuth} from '../contexts/AuthContext.jsx';


function FeatureDetailsLoan() {
  const { userData } = useAuth(); // Assuming userData contains user information
  const [wallet, setWallet] = useState(null); // State to hold wallet information

  useEffect(() => {
    // Fetch user's wallet information when component mounts
    if (userData) {
      fetchWallet(userData.user_id);
    }
  }, [userData]);

  const fetchWallet = async (user_id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/wallet/${user_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch wallet data');
      }
      const data = await response.json();
      setWallet(data.wallet);
    } catch (error) {
      console.error('Error fetching wallet:', error.message);
      // Handle error scenarios
    }
  };

  const handleCampaignClick = async (link) => {
    try {
      if (!userData) {
        throw new Error('User data not available');
      }

      const response = await fetch('http://localhost:3000/api/wallet/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userData.user_id, amount: 100 }), // Assuming 100 coins for each click
      });

      if (!response.ok) {
        throw new Error('Failed to add coins');
      }

      // Update wallet state after successful update
      const updatedWallet = await response.json();
      setWallet(updatedWallet.wallet);

      console.log('Coins added successfully');
      // Optionally, update UI to reflect new coin balance
    } catch (error) {
      console.error('Error adding coins:', error.message);
      // Handle network or other errors
    }
  };

  return (
    <div id="features1" style={{ marginTop: '80px' }}>
      <Typography.Title level={2}>Hi, {userData ? userData.name : 'User'}</Typography.Title>
      <Typography.Title level={2}>
        Explore Our Exclusive Financial Products and Start Earning Today!
      </Typography.Title>

      <div className="a-container">
        <FeatureBox
          image={fimage1}
          title="Angel Broking"
          text="Angel One - India’s largest broker introduced ZERO cost brokerage services..."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=4094&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
          onClick={() => handleCampaignClick('http://paychat.fuse-cloud.com/tl?a=1486&o=4094&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}')}
        />
        <FeatureBox
          image={fimage8}
          title="Groww"
          text="Groww is India’s growing financial services platform where users can find their investment solutions..."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=4075&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
          onClick={() => handleCampaignClick('http://paychat.fuse-cloud.com/tl?a=1486&o=4075&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}')}
        />
        {/* Repeat for other FeatureBox components */}
      </div>

      {/* Display wallet information if available */}
      {wallet && (
        <div style={{ marginTop: '20px' }}>
          <Typography.Text>Current Coins: {wallet.coins}</Typography.Text>
        </div>
      )}
    </div>
  );
}

export default FeatureDetailsLoan;
