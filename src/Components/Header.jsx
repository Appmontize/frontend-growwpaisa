import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import image1 from '../images/upstox.png';
import image2 from '../images/AngelOne.png';
import image3 from '../images/Appreciate-logo.png';
import image4 from '../images/M-stock.png';
import image5 from '../images/Bajaj Broking123.jpg';

function Header() {
  return (
    <div id='main'>
      <div className='name'>
        {/* Make the heading a clickable link */}
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <h2>
            <span>Top Campaigns!!</span>
          </h2>
        </Link>

        {/* Container for the images */}
        <div className='image-container' style={styles.imageContainer}>
          <Link to="/register">
            <img src={image1} alt="Campaign 1" style={styles.image} />
          </Link>
          <Link to="/register">
            <img src={image2} alt="Campaign 2" style={styles.image} />
          </Link>
          <Link to="/register">
            <img src={image4} alt="Campaign 4" style={styles.image} />
          </Link>
          <Link to="/register">
            <img src={image5} alt="Campaign 5" style={styles.image} />
          </Link>
        </div>

        <div className='header-btns'></div>
      </div>
    </div>
  );
}

const styles = {
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allow images to wrap to next line
    justifyContent: 'center', // Center images
    marginTop: '20px',
  },
  image: {
    width: '100%', // Set width to 100% for responsiveness
    maxWidth: '150px', // Limit the max width
    height: 'auto', // Maintain aspect ratio
    objectFit: 'contain', // Cover the area without distortion
    borderRadius: '10px',
    margin: '10px', // Add margin for spacing
  },
};

export default Header;
