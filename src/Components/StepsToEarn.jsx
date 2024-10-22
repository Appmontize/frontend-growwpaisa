import React from 'react';
import image1 from '../images/sign-up-concept-illustration_114360-7965.png'
import video1 from '../videos/step 2.mp4'; // Replace with actual path
import video2 from '../videos/step3.mp4'; // Replace with actual path

function StepsToEarn() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-5xl font-bold text-gray-800 mb-12 font-poppins">
        Start Earning in 3 Easy Steps
      </h2>

      {/* Step Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="relative p-6 rounded-lg border-2 border-cyan-500 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-cyan-500 rounded-t-lg"></div>
          {/* Image for Step 1 */}
          <img
            src={image1}
            alt="Step 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 1</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Sign up for free and create your account.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative p-6 rounded-lg border-2 border-cyan-500 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-cyan-500 rounded-t-lg"></div>
          {/* Video for Step 2 */}
          <video
            className="w-full h-40 object-contain rounded-md mb-4"
            src={video1}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 2</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Complete simple tasks and earn coins.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative p-6 rounded-lg border-2 border-cyan-500 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-cyan-500 rounded-t-lg"></div>
          {/* Video for Step 3 */}
          <video
            className="w-full h-40 object-contain rounded-md mb-4"
            src={video2}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 3</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Redeem your coins for real money or rewards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepsToEarn;
