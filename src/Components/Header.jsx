import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import yourImage from '../images/campaings image.png';

function Header() {
  return (
    <div id='main'>
      <div className='name'>
        {/* Make the heading a clickable link */}
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <h2>
            <span>Available Campaigns!!</span>
          </h2>
        </Link>

        {/* Make the image a clickable link */}
        <Link to="/register">
          <img 
            src={yourImage} 
            alt="Campaign"
            style={{
              width: '100%', // Full width of the container
              maxWidth: '1200px', // Set a maximum width for larger screens
              height: 'auto', // Maintain aspect ratio
              borderRadius: '10px', // Rounded corners
              marginTop: '20px', // Space between heading and image
            }}
          />
        </Link>

        <div className='header-btns'></div>
      </div>
    </div>
  );
}

export default Header;
