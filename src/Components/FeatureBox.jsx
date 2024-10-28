import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function FeatureBox(props) {
  const [shareText, setShareText] = useState('Share on Whatsapp');
  const [buttonText, setButtonText] = useState('Share on Whatsapp'); // State for the button text

  const handleExternalLink = () => {
    // First, call the onClick handler passed from the parent component
    if (props.onClick) {
      props.onClick();
    }
    // Then, open the external link
    window.open(props.link, '_blank');
  };

  const handleShareOnWhatsapp = (event) => {
    event.stopPropagation(); // Prevent triggering handleExternalLink
    navigator.clipboard.writeText(props.link)
      .then(() => {
        setShareText('Link copied'); // Update the text inside the feature box
        setButtonText('Link copied'); // Update the button text
        setTimeout(() => {
          setShareText('Share on Whatsapp');
          setButtonText('Share on Whatsapp');
        }, 3000); // Revert text after 3 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div>
      {/* Main Feature Box */}
      <div className='a-box' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleExternalLink}>
        <div className='a-b-img'>
          <img src={props.image} alt='' />
          <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p >Click to Install</p>
          </div>
        </div>
      </div>
      
      {/* Share on Whatsapp Button Below the Box */}
    
    </div>
  );
}

export default FeatureBox;
