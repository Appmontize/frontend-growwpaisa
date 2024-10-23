import React from 'react';
import gifSource from '../videos/piggy.gif'; // Import the GIF file
import Typewriter from 'react-typewriter-effect'; // Import the typewriter effect
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  return (
    <div className="bg-gray-50 py-12 mt-16 h-auto flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center"> {/* Center text container */}
        
        {/* Left part with heading */}
        <div className="flex flex-col items-center text-center max-w-lg mt-2 md:mt-20 md:items-start md:text-left"> {/* Flex center on mobile */}
          <h2 className="text-3xl md:text-2xl font-bold text-blue-800 font-poppins">Welcome to</h2> {/* Increased mobile size only */}
          
          {/* Adjust font size and center on mobile */}
          <h1 className="text-5xl md:text-6xl font-bold text-blue-800 font-poppins"> {/* Increased mobile size only */}
            <Typewriter
              text="Growwpaisa !!"
              typingDelay={100}
              cursorColor="#3B82F6" // Customize cursor color
              cursor="|"
            />
          </h1>

          {/* Two-line text for mobile view */}
          <p className="mt-2 text-2xl md:text-2xl font-poppins">
            <span className="block md:inline text-cyan-500 font-extrabold">One Stop for all</span>
            <span className="block md:inline md:ml-1 text-blue-800 font-extrabold">Financial Solutions</span> {/* Added space for desktop */}
          </p>

          {/* Signup Button */}
          <div className="mt-6 flex justify-center">
            <Link to="/register">
              <button className="bg-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-cyan-500 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Right part with GIF */}
        <div className="ml-0 md:ml-8 mt-6 md:mt-0"> {/* Adjust margin for spacing */}
          <img
            className="w-[500px] h-auto mx-auto" // Keep GIF centered on mobile
            src={gifSource} // Use the imported GIF source
            alt="Descriptive alt text for GIF"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
