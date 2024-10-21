import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import FeatureBox from './FeatureBox';
import { useAuth } from '../contexts/AuthContext.jsx';
import HeaderCampaigns from './HeaderCampaign.jsx';

function FeatureDetailsLoan() {
  const { userData } = useAuth(); // Assuming userData contains user information
  const [wallet, setWallet] = useState(null); // State to hold wallet information
  const [campaigns, setCampaigns] = useState([]); // State to hold campaign data

  useEffect(() => {
    if (userData) {
      fetchWallet(userData.user_id);
    }
    fetchCampaigns();
  }, [userData]);

  const fetchWallet = async (user_id) => {
    try {
      const response = await fetch(`https://api.growwpaisa.com/api/wallet/${user_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch wallet data');
      }
      const data = await response.json();
      setWallet(data.wallet);
    } catch (error) {
      console.error('Error fetching wallet:', error.message);
      setWallet(null);
    }
  };

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('https://api.growwpaisa.com/campaign/fetch');
      if (!response.ok) {
        throw new Error('Failed to fetch campaigns');
      }
      const data = await response.json();
      setCampaigns(data || []); // Assuming data is an array of campaigns
    } catch (error) {
      console.error('Error fetching campaigns:', error.message);
      setCampaigns([]);
    }
  };

  const handleCampaignClick = async (campaign_id, url) => {
    try {
      console.log('Sending request to generate click ID for user:', userData.user_id, 'and campaign:', campaign_id);
      const response = await fetch('https://api.growwpaisa.com/click/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userData.user_id, campaign_id }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate click ID');
      }
  
      const data = await response.json();
      console.log('Generated Click ID:', data.click_id);
  
      // Fire the postback with the generated click ID
      await firePostback(data.click_id);
  
      // Open the URL after click ID is successfully generated
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error generating click ID:', error);
    }
  };
  
  // Function to fire the postback to the backend
  const firePostback = async (click_id) => {
    try {
      const postbackResponse = await fetch(`https://api.growwpaisa.com/postback/MMPPostback?tid=${click_id}`);
      if (!postbackResponse.ok) {
        throw new Error('Failed to fire postback');
      }
      console.log('Postback fired successfully');
    } catch (error) {
      console.error('Error firing postback:', error);
    }
  };
  

  return (
    <div id="features1" style={{ marginTop: '80px' }}>
      <Typography.Title level={2}>Hi, {userData ? userData.name : 'User'}</Typography.Title>
      <Typography.Title level={2}>
        Explore Our Exclusive Financial Products and Start Earning Today!
      </Typography.Title>

          {/* Pass the first 4 campaigns to HeaderCampaigns */}
          <HeaderCampaigns campaigns={campaigns.slice(0, 4)} />
      <div className="a-container">
        {Array.isArray(campaigns) && campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <FeatureBox
              key={campaign.id} // Use unique id for the key
              image={campaign.image}
              title={campaign.title}
              text={campaign.text}
              link={campaign.link}
              onClick={() => handleCampaignClick(campaign.id, campaign.link)}
            />
          ))
        ) : (
          <Typography.Text>No campaigns available</Typography.Text>
        )}
      </div>

      {wallet && (
        <div style={{ marginTop: '20px' }}>
          <Typography.Text>Current Coins: {wallet.coins}</Typography.Text>
        </div>
      )}
    </div>
  );
}

export default FeatureDetailsLoan;
