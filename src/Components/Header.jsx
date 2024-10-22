import React from 'react';
import gifSource from '../videos/piggy.gif'; // Import the GIF file
import Typewriter from 'react-typewriter-effect'; // Import the typewriter effect
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  return (
    <div className="bg-gray-50 py-12 mt-16 h-auto flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center"> {/* Flex column for mobile */}
        {/* Left part with heading */}
        <div className="text-left max-w-lg mt-4 md:mt-20 text-center md:text-left"> {/* Reduce margin-top for mobile */}
          <h2 className="text-2xl font-bold text-blue-800 font-poppins">Welcome to</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 font-poppins"> {/* Adjusted for mobile */}
            <Typewriter
              text="Growwpaisa !! "
              typingDelay={100}
              cursorColor="#3B82F6" // Customize cursor color
              cursor="|"
            />
          </h1>
          <p className="mt-2 text-2xl font-poppins">
            <span className="text-cyan-500 font-extrabold">Affiliate Marketing </span>
            <span className="text-blue-800 font-extrabold">Platform</span>
          </p>

          {/* Signup Button */}
          <div className="mt-6 flex justify-center"> {/* Center the button */}
            <Link to="/register"> {/* Link to the register route */}
              <button className="bg-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-cyan-500 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Right part with GIF */}
        <div className="ml-0 md:ml-8 mt-6 md:mt-0"> {/* Adjust margin for spacing */}
          <img
            className="w-[500px] h-auto mx-auto" // Center GIF on mobile
            src={gifSource} // Use the imported GIF source
            alt="Descriptive alt text for GIF" // Add descriptive alt text
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
