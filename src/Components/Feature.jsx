import React from 'react';

import FeatureBox from './FeatureBox';
import fimage1 from '../images/Loan.jpg';
//import fimage2 from '../images/creditcard.jpg';
//import fimage3 from '../images/investment.png';



function Feature() {
  return (
    <div id='products'>
       <h1>Products</h1>
       <div className='a-container'>
        <FeatureBox 
        image={fimage1} 
        link= "/signup"
        title="Personal Loan" 
        
        text="The applicant must be at least 18 years old.
The applicant should either be self-employed or salaried.
Minimum salary of the applicant must be between INR 1 lakh to INR 3 lakh
"/> 
     
     
       </div>
    </div>
  )
}

export default Feature;