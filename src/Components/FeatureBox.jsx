import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function FeatureBox(props) {
  const [shareText, setShareText] = useState('Share on Whatsapp');

  const handleExternalLink = () => {
    window.open(props.link, '_blank');
  };

  const handleShareOnWhatsapp = (event) => {
  event.stopPropagation(); // Prevent triggering handleExternalLink
  navigator.clipboard.writeText(props.link)
    .then(() => {
      setShareText('Link copied');
      // Optionally reset the text after a few seconds
      setTimeout(() => setShareText('Share on Whatsapp'), 3000);
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
};

  return (
    <div className='a-box' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleExternalLink}>
      <div className='a-b-img'>
        <img src={props.image} alt='' />
        <div className='a-b-text'>  
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <p>Click Me</p> 
          <p onClick={handleShareOnWhatsapp} style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px', color: 'green' }} />
            {shareText === 'Share on Whatsapp' ? 'Share on Whatsapp' : 'Link copied'}
            
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
