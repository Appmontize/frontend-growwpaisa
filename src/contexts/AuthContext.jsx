import React, { useContext, useEffect, useState, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userWallet, setUserWallet] = useState(0); // State for wallet details
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user_data'));
    if (storedData) {
      const { userToken, user } = storedData;
      setToken(userToken);
      setUserData(user);
      setIsAuthenticated(true);

      // Fetch wallet details using user_id 
      if (user.user_id) {
        console.log('Fetching wallet details for user ID:', user.user_id);
        fetchWalletDetails(user.user_id);
      } else {
        console.error('User ID is not defined in storedData');
      }
    }
  }, []);

  const fetchWalletDetails = async (userId) => {
    if (!userId) {
      console.error('User ID is required to fetch wallet details');
      return;
    }
  
    try {
      const response = await fetch(`https://api.growwpaisa.com/api/wallet/${userId}`);
      console.log('API response status:', response.status); // Log the response status
  
      if (response.ok) {
        const data = await response.json();
        console.log('API response data:', data); // Log the full response data
  
        const coinsAmount = data.wallet?.coins || 0; // Ensure amount is a number
        console.log('Fetched wallet details:', coinsAmount);
        setUserWallet(coinsAmount);
      } else {
        const errorText = await response.text(); // Fetch the error message from the response
        console.error('Failed to fetch wallet details:', errorText);
      }
    } catch (error) {
      console.error('Error fetching wallet details:', error.message);
    }
  };
  

  const login = async (newToken, newData) => {
    localStorage.setItem("user_data", JSON.stringify({ userToken: newToken, user: newData }));
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);

    if (newData.user_id) {
      console.log('Fetching wallet details for user ID:', newData.user_id);
      await fetchWalletDetails(newData.user_id);
    } else {
      console.error('User ID is not defined in newData');
    }
  };

  const logout = () => {
    localStorage.removeItem('user_data');
    setToken(null);
    setUserData(null);
    setUserWallet(0); // Reset wallet details on logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData, userWallet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
