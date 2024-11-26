import React, { useState, useEffect } from 'react';
import FeatureBox from './FeatureBox';
import { useAuth } from '../contexts/AuthContext.jsx';
import CampaignSteps from './CampaignSteps.jsx';

function FeatureDetailsLoan() {
  const { userData } = useAuth();
  const [wallet, setWallet] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = {
    Demat: [7, 9, 16, 10, 17, 18, 24],
    'Credit Card': [23, 19],
    Loan: [25, 27],
    Wallet: [22, 26],
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
      setFilteredCampaigns(data || []);
    } catch (error) {
      console.error('Error fetching campaigns:', error.message);
      setCampaigns([]);
      setFilteredCampaigns([]);
    }
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredCampaigns(campaigns);
    } else {
      const filtered = campaigns.filter((campaign) =>
        categories[category]?.includes(campaign.id)
      );
      setFilteredCampaigns(filtered);
    }
  };

  const handleCampaignStepsClick = () => {
    setSelectedCategory('All');
    setFilteredCampaigns(campaigns); // Show all campaigns
  };

  return (
    <div id="features1" className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, {userData ? userData.name : 'User'}
      </h2>
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Our Best Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['All', 'Demat', 'Credit Card', 'Loan', 'Wallet'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg border-2 ${
              selectedCategory === category ? 'bg-cyan-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <FeatureBox key={campaign.id} {...campaign} />
          ))
        ) : (
          <p className="text-center">No campaigns available for the selected category.</p>
        )}
      </div>

      {wallet && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold">
            Your Wallet Balance: {wallet.coins} Coins
          </h3>
        </div>
      )}

      <CampaignSteps onCampaignStepsClick={handleCampaignStepsClick} />
    </div>
  );
}

export default FeatureDetailsLoan;
