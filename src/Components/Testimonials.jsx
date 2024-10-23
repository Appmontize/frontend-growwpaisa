import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../images/rahulpanchal.jpeg';
import image2 from '../images/mohit sindhu.jpeg';
import image3 from '../images/varunsharma.jpeg';
import image4 from '../images/vishalsharma.jpeg'

// Import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Panchal',
    feedback: '"Growwpaisa has transformed my approach to budgeting and saving!"',
    image: image1,
  },
  {
    id: 2,
    name: 'Vishal Sharma',
    feedback: '"The financial solutions provided by Growwpaisa are incredibly effective and reliable!"',
    image: image4,
  },
  {
    id: 3,
    name: 'Varun Sharma',
    feedback: '"With Growwpaisa, I’ve finally taken control of my finances and I couldn’t be happier!"',
    image: image3,
  },
  {
    id: 4,
    name: 'Mohit Sindhu',
    feedback: '"Thanks to Growwpaisa, I’ve achieved my financial goals faster than I ever thought possible!"',
    image: image2,
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(3); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Show one slide on mobile
      } else {
        setSlidesPerView(3); // Show three slides on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once on mount to set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-bold text-gray-800 mb-12 font-poppins">
          What People Say About Growwpaisa
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={3} // Reduced space between slides
          slidesPerView={slidesPerView} // Dynamic slidesPerView
          autoplay={{
            delay: 3000, // Slides will change every 3 seconds
            disableOnInteraction: false, // Continue autoplay even when interacted
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="flex justify-center z-0" // Lower z-index for Swiper
          style={{ paddingBottom: '30px' }} // Adds some space for pagination dots
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="flex justify-center">
              <div
                className="bg-white shadow-2xl rounded-lg border-2 border-blue-800 p-6 m-2"
                style={{ width: '350px', height: '350px' }} // Increased box size for better fit
              >
                {/* Image and Name Section */}
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s picture`}
                    className="rounded-full w-32 h-32 mb-2 shadow-lg transition-transform transform hover:scale-110 border-4 border-cyan-500" // Added border and shadow
                  />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-800 text-center font-bold text-lg">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom styling to move the pagination dots lower */}
        <style>
          {`
            .swiper-pagination {
              bottom: -20px !important; /* Moves the dots lower */
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Testimonials;
