import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Profile from './pages/Profile';
import { useAuth } from './contexts/AuthContext';
import Navbar from './Components/Navbar';
import Footer from './Components/footer/Footer';
import FeatureDetailsLoan from './Components/FeatureDetailsLoan';
import PostsHome from './Components/Blogs/PostsHome';
import ComingSoon from './Components/ComingSoon';
import WalletPage from './pages/WalletPage';
import Header from './Components/Header';
import StepsToEarn from './Components/StepsToEarn';
import FAQ from './Components/FAQ';
import Testimonials from './Components/Testimonials';

const App = () => {
  const { isAuthenticated } = useAuth();

  // Elements for the homepage layout
  const elementsForHomePage = [
    <Header key="header" />,
    <StepsToEarn key="steps" />,
    <Testimonials key="testimonials" />,
    <FAQ key="faq" />,
  ];

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={elementsForHomePage} />

          {/* Coming Soon */}
          <Route path="/ComingSoon" element={<ComingSoon />} />

          {/* Register */}
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/campaigns" />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/campaigns" />}
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />

          {/* Wallet Page */}
          <Route path="/wallet" element={<WalletPage />} />

          {/* Campaigns */}
          <Route path="/campaigns" element={<FeatureDetailsLoan />} />

          {/* Blogs */}
          <Route path="/blogs" element={<PostsHome />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
