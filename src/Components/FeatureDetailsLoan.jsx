import React, { useState, useEffect } from 'react';
import FeatureBox from './FeatureBox'; // Component for displaying individual campaigns
import { useAuth } from '../contexts/AuthContext.jsx'; // Authentication context for user data
import CampaignSteps from './CampaignSteps.jsx'; // Component for campaign steps

function FeatureDetailsLoan() {
  const { userData } = useAuth();
  const [wallet, setWallet] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const categories = {
    Demat: [7, 9, 16, 10, 17, 18, 24],
    'Credit Card': [23, 19],
    Loan: [25, 27],
    Wallet: [22, 26],
  };

  // Fetch wallet and campaigns on component mount
  useEffect(() => {
    if (userData) {
      fetchWallet(userData.user_id);
    }
    fetchCampaigns();
  }, [userData]);

  // Fetch the user's wallet data
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

  // Fetch all campaigns
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

  // Filter campaigns by category
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

  // Handle campaign clicks to generate click_id and redirect
  const handleCampaignClick = async (campaign) => {
    if (loading) return; // Prevent multiple clicks while the request is processing
  
    setLoading(true); // Set loading state to true
    setErrorMessage(''); // Clear previous errors
  
    try {
      const response = await fetch('https://api.growwpaisa.com/click/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userData.user_id,
          campaign_id: campaign.id,
          base_url: campaign.link, // Base URL from API
        }),
      });
  
      if (!response.ok) throw new Error('Failed to generate click ID');
  
      const { campaignUrl } = await response.json();
  
      // Open the campaign URL in a new tab
      window.open(campaignUrl, '_blank');
    } catch (error) {
      console.error('Error generating click ID:', error.message);
      setErrorMessage('Failed to process the campaign. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  
  // Show all campaigns when steps are clicked
  const handleCampaignStepsClick = () => {
    setSelectedCategory('All');
    setFilteredCampaigns(campaigns);
  };

  return (
    <div id="features1" className="mt-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, {userData ? userData.name : 'User'}
      </h2>
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
        Our Best Categories
      </h2>

      {/* Campaign Categories */}
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

      {/* Campaign Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <FeatureBox
              key={campaign.id}
              {...campaign}
              onClick={() => handleCampaignClick(campaign)}
            />
          ))
        ) : (
          <p className="text-center">No campaigns available for the selected category.</p>
        )}
      </div>

      {/* Wallet Balance */}
      {wallet && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold">
            Your Wallet Balance: {wallet.coins} Coins
          </h3>
        </div>
      )}

      {/* Loading and Error Messages */}
      {loading && <p className="text-center text-blue-500">Processing your click...</p>}
      {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}

      <CampaignSteps onCampaignStepsClick={handleCampaignStepsClick} />
    </div>
  );
}

export default FeatureDetailsLoan;
