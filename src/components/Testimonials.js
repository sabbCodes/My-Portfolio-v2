// src/components/Testimonial.js
import React from 'react';
import Slider from 'react-slick';

function Testimonial(){
  const testimonialData = [
    { name: 'Client 1', message: 'Testimonial message 1' },
    { name: 'Client 2', message: 'Testimonial message 2' },
    // Add more testimonials
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial">
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>{testimonial.message}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
