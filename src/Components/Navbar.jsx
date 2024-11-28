import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path as per your file structure
import logo from '../images/apnaloan (14).png';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Navbar() {
  const { isAuthenticated, logout, userWallet } = useAuth(); // Include userWallet from AuthContext

  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  // Logout function
  const handleLogout = () => {
    logout();
    // Optionally, redirect to login or home page after logout
  };

  // Dropdown menu for authenticated user
  const menu = (
    <Menu>
      <Menu.Item key="dashboard">
        <RouterLink to="/profile">My Profile</RouterLink>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <RouterLink to="/" className="logo">
        <img src={logo} alt="" /> GROWW PAISA
      </RouterLink>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul className="menu">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <a href="http://blog.growwpaisa.com/">Blogs</a>
        </li>
        <li>
          <RouterLink to="/register">Campaigns</RouterLink>
        </li>
        {isAuthenticated && (
          <li>
            <RouterLink to="/wallet">Wallet: {userWallet.toFixed(2)} coins</RouterLink>
          </li>
        )}
        <li>
          {isAuthenticated ? (
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
          ) : (
            <RouterLink to="/register">Sign Up</RouterLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
