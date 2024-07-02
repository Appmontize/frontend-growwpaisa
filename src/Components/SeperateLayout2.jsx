// SeparateLayout.js
import React from 'react';
import Offer from '../Components/Offer'
import Contact from '../Components/Contact'

//import FeatureDetailsDes from './FeatureDetailsDes';


const SeparateLayout2 = ({ children }) => {
  return (
    <div>
      
     
      {children}
      <Offer/>
      <Contact/>
      
    </div>
  );
};

export default SeparateLayout2;
