import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Panchal',
    feedback: '"Growwpaisa has transformed my approach to budgeting and saving!"',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGRfpCoxh7cjg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700562187638?e=1735171200&v=beta&t=vE74fwy9yNbSeeymRp9w3y_AgZElUjdfez0fTf0gMlU',
  },
  {
    id: 2,
    name: 'Vishal Sharma',
    feedback: '"The financial solutions provided by Growwpaisa are incredibly effective and reliable!"',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQH5aXvklRVsOA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1651474821203?e=1735171200&v=beta&t=CDDzrJiEGtpzxvuZhUcK0rr-w6dkoaKutHj6dfKV-38',
  },
  {
    id: 3,
    name: 'Varun Sharma',
    feedback: '"With Growwpaisa, I’ve finally taken control of my finances and I couldn’t be happier!"',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQENi1_sIe2gVQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728287429412?e=1735171200&v=beta&t=8ZFaNc_y5KuFGY5H1DHotS6wjgdVYF8fXPe2cyJvi2k',
  },
  {
    id: 4,
    name: 'Mohit Sindhu',
    feedback: '"Thanks to Growwpaisa, I’ve achieved my financial goals faster than I ever thought possible!"',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQHJPEw9UpaWIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1657622101901?e=1735171200&v=beta&t=9huw0CJUwNNQNqHKvGNI_qkhOW0N8Wf1aXhTm6dCt8o',
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
