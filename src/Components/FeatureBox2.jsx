import React from 'react';


function FeatureBox(props) {
  return (
    <div className='a-box'>
    <div class='a-b-img'>
        <img src={props.image} alt='' />
    <div className='a-b-text'>
        <h2> {props.title} </h2>
        
        <p>{props.text} </p>
         <a href={props.link}> Coming Soon</a>
         
        
    </div>
    

    </div>
    </div>
  )
}

export default FeatureBox;