import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function FeatureBox(props) {
  const [shareText, setShareText] = useState('Share on Whatsapp');
  const [buttonText, setButtonText] = useState('Share on Whatsapp');
  const [animate] = useState(true); // Set to true for infinite animation

  const handleExternalLink = () => {
    if (props.onClick) {
      props.onClick();
    }
    window.open(props.link, '_blank');
  };

  const handleShareOnWhatsapp = (event) => {
    event.stopPropagation(); // Prevent triggering handleExternalLink
    navigator.clipboard.writeText(props.link)
      .then(() => {
        setShareText('Link copied');
        setButtonText('Link copied');
        setTimeout(() => {
          setShareText('Share on Whatsapp');
          setButtonText('Share on Whatsapp');
        }, 3000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="flex flex-wrap justify-center max-w-full mb-8 font-nunito"> {/* Use Tailwind class for Nunito */}
      {/* Main Feature Box with popping effect */}
      <div
        className={`bg-white border-2 border-gray rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-lg m-4 transform ${animate ? 'animate-pop' : ''}`}
        onClick={handleExternalLink} // Clickable link for the whole box
        style={{ cursor: 'pointer' }} // Ensure the pointer cursor indicates clickability
      >
        <div className="flex flex-col items-center">
          <div className="relative w-full h-48 flex items-center justify-center">
            <img
              src={props.image}
              alt=""
              className="object-contain w-3/4 h-full p-2" // Fixed height and width for uniformity
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-3xl font-extrabold text-black">{props.title}</h2> {/* Increased title size */}
            <p className="text-l   text-gray-700">{props.text}</p> {/* Increased text size */}
            {/* Button to Install */}
            <button
              onClick={handleExternalLink}
              className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Install
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pop {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1); /* Adjust scaling as needed */
            }
          }

          .animate-pop {
            animation: pop 1s infinite; /* Infinite popping effect */
          }
        `}
      </style>
    </div>
  );
}

export default FeatureBox;
