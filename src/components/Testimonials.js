import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimateOnScroll from "./AnimateOnScroll";

function Testimonial(){
  const testimonialData = [
    { name: 'Client 1', message: 'Testimonial message 1' },
    { name: 'Client 2', message: 'Testimonial message 2' },
    { name: 'Client 3', message: 'Testimonial message 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="testimonial" id='testimonial'>
      <div className='testimonialInner'>
        <AnimateOnScroll>
          <div className="testimonial-slider-container">
            <h1>What People say about me</h1>
            <Slider {...settings}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <p>{testimonial.message}</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonial;
