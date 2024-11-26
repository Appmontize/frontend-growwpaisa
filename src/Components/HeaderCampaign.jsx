import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/upstox.png';
import image2 from '../images/AngelOne.png';
import image4 from '../images/M-stock.png';
import image5 from '../images/BajajBroking.png';
import image6 from '../images/stable-money.png'; // Replace with actual image paths
import image7 from '../images/Appreciate-logo.png'; // Replace with actual image paths
import image8 from '../images/abcd.png'; // Replace with actual image paths
import image9 from '../images/airtel (2).png'; // Replace with actual image paths

function HeaderCampaign() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    const target = document.getElementById('headerCampaign');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 py-12" id="headerCampaign">
      <div className="container mx-auto text-center">
        <Link to="/register" className="text-center text-5xl font-bold text-gray-800 mb-12 font-poppins">
          <span>  </span>
        </Link>

        <div className="flex flex-wrap justify-center items-center mt-6">
          {/* First row with 4 images */}
          <div className="flex justify-center w-full">
            {[image1, image2, image4, image5].map((src, index) => (
              <Link
                to="/register"
                key={index}
                className={`p-4 transition-transform duration-700 transform ${isVisible ? 'animate-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 300}ms` }} // Increase delay for slower effect
              >
                <img
                  src={src}
                  alt={`Campaign ${index + 1}`}
                  className="w-32 h-32 object-contain rounded-lg animate-pop" // Fixed width and height
                />
              </Link>
            ))}
          </div>

          {/* Second row with 4 images */}
          <div className="flex justify-center w-full mt-4">
            {[image6, image7, image8, image9].map((src, index) => {
              // Set specific styles for Stable Money and Airtel images
              const imgClass = [image6, image9].includes(src) ? 'w-28 h-28' : 'w-32 h-32'; // Adjusted size for specific images
              return (
                <Link
                  to="/register"
                  key={index}
                  className={`p-4 transition-transform duration-700 transform ${isVisible ? 'animate-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 4) * 300}ms` }} // Increase delay for slower effect
                >
                  <img
                    src={src}
                    alt={`Campaign ${index + 5}`}
                    className={`${imgClass} object-contain rounded-lg animate-pop`} // Use dynamic class for size
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes leftToRight {
            from {
              transform: translateX(-50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes pop {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1); /* Adjust scaling as needed */
            }
          }

          .animate-left {
            animation: leftToRight 0.5s forwards; /* Adjust duration for the left-to-right effect */
          }

          .animate-pop {
            animation: pop 1s infinite; /* Infinite popping effect */
          }
        `}
      </style>
    </div>
  );
}

export default HeaderCampaign;
