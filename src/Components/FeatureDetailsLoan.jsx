import React, { useState, useEffect } from 'react';
import { Typography } from 'antd'; // Optional: You can remove if not needed
import FeatureBox from './FeatureBox';
import { useAuth } from '../contexts/AuthContext.jsx';
import CampaignSteps from './CampaignSteps.jsx';

function FeatureDetailsLoan() {
  const { userData } = useAuth(); // Get user data from Auth context
  const [wallet, setWallet] = useState(null); // State to hold wallet data
  const [campaigns, setCampaigns] = useState([]); // State to hold campaign data
  const [filteredCampaigns, setFilteredCampaigns] = useState([]); // For filtered campaigns
  const [selectedCategory, setSelectedCategory] = useState('All'); // Filter state

  // IDs of campaigns by category
  const categories = {
    Demat: [7, 9, 16, 10, 17, 18, 24], // IDs of Demat campaigns
    'Credit Card': [23, 19], // IDs of Credit Card campaigns
    Loan: [25, 27],
    Wallet: [22, 26], // IDs of Loan campaigns
  };

  useEffect(() => {
    if (userData) {
      fetchWallet(userData.user_id);
    }
    fetchCampaigns();
  }, [userData]);

  const fetchWallet = async (user_id) => {
    try {
      const response = await fetch(`https://api.growwpaisa.com/api/wallet/${user_id}`);
      if (!response.ok) throw new Error('Failed to fetch wallet data');
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
      if (!response.ok) throw new Error('Failed to fetch campaigns');
      const data = await response.json();
      setCampaigns(data || []);
      setFilteredCampaigns(data || []); // Initialize with all campaigns
    } catch (error) {
      console.error('Error fetching campaigns:', error.message);
      setCampaigns([]);
      setFilteredCampaigns([]);
    }
  };

  const handleCampaignClick = async (campaignId, link) => {
    try {
      const response = await fetch('https://api.growwpaisa.com/click/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userData.user_id, campaign_id: campaignId }),
      });

      if (!response.ok) throw new Error('Failed to generate click ID');
      const data = await response.json();
      console.log('Generated Click ID:', data.click_id);

      // Fire the postback with the generated click ID
      await firePostback(data.click_id);
      window.open(link, '_blank'); // Open campaign link
    } catch (error) {
      console.error('Error generating click ID:', error.message);
    }
  };

  const firePostback = async (click_id) => {
    try {
      const response = await fetch(`https://api.growwpaisa.com/postback/MMPPostback?tid=${click_id}`);
      if (!response.ok) throw new Error('Failed to fire postback');
      console.log('Postback fired successfully');
    } catch (error) {
      console.error('Error firing postback:', error.message);
    }
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category); // Set the selected category
    if (category === 'All') {
      setFilteredCampaigns(campaigns); // Show all campaigns
    } else {
      const filtered = campaigns.filter((campaign) =>
        categories[category].includes(campaign.id)
      );
      setFilteredCampaigns(filtered);
    }
  };

  return (
    <div id="features1" className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
        Welcome, {userData ? userData.name : 'User'}
      </h2>
      

      <CampaignSteps />

      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12 font-nunito">
        Our Best Categories
      </h2>

   {/* Filter Buttons */}
{/* Filter Buttons */}
<div className="flex justify-center gap-4 mb-8">
  {['All', 'Demat', 'Credit Card', 'Loan', 'Wallet'].map((category) => (
    <button
      key={category}
      className={`px-6 py-3 rounded-lg border-2 border-black text-black font-semibold shadow-md transition-transform duration-300 ease-in-out ${
        selectedCategory === category ? 'bg-cyan-600 scale-105 text-white' : 'bg-gray-200 hover:bg-cyan-500 hover:text-white'
      }`}
      onClick={() => handleFilterChange(category)}
    >
      {category}
    </button>
  ))}
</div>




      {/* Campaign List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <FeatureBox
              key={campaign.id}
              image={campaign.image}
              title={campaign.title}
              text={campaign.text}
              link={campaign.link}
              onClick={() => handleCampaignClick(campaign.id, campaign.link)}
            />
          ))
        ) : (
          <p className="text-center text-xl font-nunito text-gray-600">
            No campaigns available for the selected category.
          </p>
        )}
      </div>

      {wallet && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 font-poppins">
            Your Wallet Balance: {wallet.coins} Coins
          </h3>
        </div>
      )}
    </div>
  );
}

export default FeatureDetailsLoan;
