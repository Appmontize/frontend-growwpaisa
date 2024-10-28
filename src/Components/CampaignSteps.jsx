import React from 'react';
import image1 from '../images/sign-up-concept-illustration_114360-7965.png'; // Local Image

function CampaignSteps() {
  return (
    <div className=".bg-f7f7f7 py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12 font-poppins">
        Start Earning Coins
      </h2>

      {/* Step Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="relative p-6 rounded-lg border-2 border-blue-900 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-900 rounded-t-lg"></div>
          {/* Image for Step 1 */}
          <img
            src="https://img.freepik.com/premium-photo/3d-searching-job-illustration-human-resource-management-hiring-concept-trendy-modern-vector-3d-style_1199903-34623.jpg?semt=ais_hybrid"
            alt="Step 1"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 1</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Click on any app you like to install !! (Scroll down to check )
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative p-6 rounded-lg border-2 border-blue-900 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-900 rounded-t-lg"></div>
          {/* Image from URL */}
          <img
            src="https://img.freepik.com/premium-vector/two-individuals-engage-downloading-app-mobile-phone-sunny-outdoor-setting-surrounded-by-greenery_538213-133309.jpg?semt=ais_hybrid" // Replace with actual image URL
            alt="Step 2"
            className="w-full h-40 object-contain rounded-md mb-4"
          />
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 2</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Install the app, and complete the task.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative p-6 rounded-lg border-2 border-blue-900 text-center shadow-2xl transform hover:scale-105 transition duration-300 bg-white">
          {/* Thinner border at the top, connected to the box */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-900 rounded-t-lg"></div>
          {/* Image from URL */}
          <img
            src="https://img.freepik.com/free-vector/flat-design-frugality-illustration_23-2150204790.jpg?semt=ais_hybrid" // Replace with actual image URL
            alt="Step 3"
            className="w-full h-40 object-contain rounded-md mb-4"
          />
          <div className="bg-green-500 p-2 rounded-md text-white text-lg font-bold mb-4 w-28 mx-auto">
            <span className="font-poppins">Step 3</span>
          </div>
          <p className="text-gray-700 font-bold font-poppins">
            Get coins in your wallet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CampaignSteps;
