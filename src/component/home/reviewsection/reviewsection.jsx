import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ReviewCarousel() {
  const reviews = [
    {
      name: 'Sarah',
      role: 'Lead Singer of The Harmonics',
      image: 'https://i.pravatar.cc/100?img=1',
      quote: 'Venulink made it so easy to find gigs that match our style. We\'ve been able to perform at amazing venues we never knew existed!'
    },
    {
      name: 'Jane',
      role: 'Owner of The Melody Lounge',
      image: 'https://i.pravatar.cc/100?img=2',
      quote: 'Venulink has streamlined our booking process. We\'ve discovered incredible talent and filled our calendar quickly.'
    },
    {
      name: 'Alexis',
      role: 'Guitarist for The Strings',
      image: 'https://i.pravatar.cc/100?img=3',
      quote: 'Using Venulink, we\'ve connected with new audiences and built a stronger fan base. It\'s a game-changer for our band!'
    },
    {
      name: 'Mike',
      role: 'Drummer of Rhythm Rebels',
      image: 'https://i.pravatar.cc/100?img=4',
      quote: 'Venulink has opened doors we never thought possible. It\'s revolutionized how we find and book gigs!'
    },
    {
      name: 'Lisa',
      role: 'Manager of Sound Wave Studios',
      image: 'https://i.pravatar.cc/100?img=5',
      quote: 'Our studio has seen a significant increase in bookings thanks to Venulink. It\'s an essential tool for any music venue.'
    },
    {
      name: 'Tom',
      role: 'Bassist for Electric Echo',
      image: 'https://i.pravatar.cc/100?img=6',
      quote: 'Venulink has helped us expand our reach and connect with venues that align perfectly with our music style.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('whyimg2.png')" }}>
      <div className="bg-white bg-opacity-40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-[#0A2463] font-bold text-center text-primary mb-4">What Our Users Say</h2>
          <p className="text-xl text-center text-black mb-12">
            Discover how Venulink has transformed the live music experience for bands and venues with seamless connections and successful gigs.
          </p>
          <Slider {...settings} className="review-slider">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: 'easeIn' }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-primary">{review.name}</h3>
                      <p className="text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 flex-grow">{review.quote}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
