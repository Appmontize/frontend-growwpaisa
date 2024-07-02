import React from 'react';

import FeatureBox from './FeatureBox';
import fimage1 from '../images/Loan.jpg';
import fimage2 from '../images/creditcard.jpg';
import fimage3 from '../images/investment.png';



function Feature() {
  return (
    <div id='features'>
       <h1>Products</h1>
       
       <div className='a-container'>
        
        <FeatureBox 
        image={fimage1} 
        link ="/loan"
        title="Personal Loan" 
        text="The applicant must be at least 18 years old.
The applicant should either be self-employed or salaried.
Minimum salary of the applicant must be between INR 1 lakh to INR 3 lakh
Credit score should be above 750 "/> 
        <FeatureBox 
        image={fimage2} 
        link= "/credit-card"
        title="Credit Card" 
        text="The applicant must be at least 18 years old.
The applicant should either be self-employed or salaried.
Minimum salary of the applicant must be between INR 1 lakh to INR 3 lakh
Credit score should be above 750"/> 
        <FeatureBox
        image={fimage3} 
        link="/investment"
        title="Investment" 
        text="The applicant must be at least 18 years old.
The applicant should either be self-employed or salaried.
Minimum salary of the applicant must be between INR 1 lakh to INR 3 lakh
Credit score should be above 750 "/> 


       
       
        
     
       </div>
    </div>
  )
}

export default Feature;