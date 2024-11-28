import { useState } from 'react';
import { message } from 'antd';
import { useAuth } from '../contexts/AuthContext.jsx';

const useLogin = () => {
  const { login, setUserWallet } = useAuth(); // Assume setUserWallet is a function to update wallet info
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch('https://7cq9lm83-3001.inc1.devtunnels.ms/auth/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        message.success(data.message);
        login(data.token, data.user);

        // Fetch wallet details after successful login
        const walletRes = await fetch(`https://7cq9lm83-3001.inc1.devtunnels.ms/api/wallet/${data.user.user_id}`);
        const walletData = await walletRes.json();
        setUserWallet(walletData.amount); // Update wallet info in the context or state
      } else if (res.status === 400) {
        setError(data.message);
      } else {
        message.error('Login failed');
      }
    } catch (error) {
      message.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
