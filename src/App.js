import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Offer from './Components/Offer';
import Contact from './Components/Contact';
import Footer from './Components/footer/Footer';
import SeparateLayout from './Components/SeparateLayout';
import FeatureDetailsLoan from './Components/FeatureDetailsLoan';
import PostsHome from './Components/Blogs/PostsHome';
import ComingSoon from './Components/ComingSoon';


const App = () => {

  const {isAuthenticated} = useAuth();
  const elementsForHomePage =[ 
   
    <Header key = "header"/>,
     <Offer key = "offer"/>,
     <Contact key = "contact"/>,
 
 
   ];

  return <Router>
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={elementsForHomePage }/>
    <Route path="/ComingSoon" element={<ComingSoon/> }/>
      <Route path = '/register' element={!isAuthenticated ? <Register /> : <Navigate to= '/campaigns'/>} />
      <Route path = '/login' element={!isAuthenticated ? <Login /> : <Navigate to ="/campaigns"/>} />
      <Route path = '/dashboard' element={isAuthenticated ? <Dashboard /> : <Login/>} />
      

      <Route
            path="/campaigns"
            element={<SeparateLayout><FeatureDetailsLoan /></SeparateLayout>}
          />

<Route
            path="/blogs"
            element={<SeparateLayout><PostsHome /></SeparateLayout>}
          />
    </Routes>
    <Footer />
    </div>
  </Router>
  
}

export default App;