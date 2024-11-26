import React, { useState, useEffect } from 'react';
import gif1 from '../images/download.gif';
import gif2 from '../images/to-do-list-checklist.gif';
import gif3 from '../images/crypto-gold.gif';

function CampaignSteps({ onCampaignStepsClick }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); // Reset animation after 0.5s
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div
      className="bg-f7f7f7 py-16 px-4 cursor-pointer"
      onClick={onCampaignStepsClick} // Trigger parent function on click
    >
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Start Earning Coins
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="text-center">
          <div className="w-52 h-52 mx-auto rounded-full border-4 border-white overflow-hidden mb-4">
            <img
              src={gif1}
              alt="Step 1"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                animate ? 'transform scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">1</span>
          </div>
          <p>Click on any app you like to install!!</p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="w-52 h-52 mx-auto rounded-full border-4 border-white overflow-hidden mb-4">
            <img
              src={gif2}
              alt="Step 2"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                animate ? 'transform scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">2</span>
          </div>
          <p>Install the app, and complete the task.</p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="w-52 h-52 mx-auto rounded-full border-4 border-white overflow-hidden mb-4">
            <img
              src={gif3}
              alt="Step 3"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                animate ? 'transform scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">3</span>
          </div>
          <p>Get coins in your wallet.</p>
        </div>
      </div>
    </div>
  );
}

export default CampaignSteps;
