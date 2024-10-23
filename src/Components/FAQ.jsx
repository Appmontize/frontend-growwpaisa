import React, { useState } from 'react';

const FAQ = () => {
  // Dummy data for FAQs
  const faqData = [
    {
      question: "What is Growwpaisa?",
      answer: "Growwpaisa is a platform that helps users earn rewards by completing simple tasks.",
    },
    {
      question: "How do I create an account?",
      answer: "You can create an account by signing up on our website and providing your name, email and password",
    },
    {
      question: "What types of tasks can I complete?",
      answer: "Tasks may include installing apps, creating accounts and other activities that reward you with coins.",
    },
    {
      question: "How do I redeem my coins?",
      answer: "You can redeem your coins for real cash in UPI (coming soon) in the wallet section of your account.",
    },
    {
      question: "How many coins are equal to 1 INR ?",
      answer: "100 coins are equal to 1 INR. ",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open question
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* FAQ Heading */}
      <h2 className="text-center text-5xl font-bold text-gray-800 mb-12 font-poppins">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center p-6 rounded-lg border-2 border-cyan-500 shadow-lg bg-white cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-bold font-poppins">
                {index + 1}. {item.question}
              </span>
              <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 border-l-4 border-cyan-500 bg-gray-100 rounded-lg mt-2">
                <p className="text-gray-700 font-poppins">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
