import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimateOnScroll from "./AnimateOnScroll";
import { Dna } from  'react-loader-spinner'

function Testimonial(){
  const [loading, setLoading] = useState(true)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const testimonialData = [
      { name: 'Client 1', message: 'Testimonial message 1' },
      { name: 'Client 2', message: 'Testimonial message 2' },
      { name: 'Client 3', message: 'Testimonial message 3' },
    ];

    setTimeout(() => {
      setTestimonials(testimonialData)
      setLoading(false)
    }, 6000)
  }, []);


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
          <div className="testimonial-slider-container">
            <h1>What People say about me</h1>
              {loading ? (
                <div className='loader'>
                  <Dna
                      visible={true}
                      height="100"
                      width="100"
                      ariaLabel="dna-loading"
                      wrapperClass="dna-wrapper"
                  />
                  <h3>Loading, Please wait...</h3>
                </div>
              ) : (
                <AnimateOnScroll>
                  <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="testimonial-item">
                        <p>{testimonial.message}</p>
                        <p className="testimonial-name">- {testimonial.name}</p>
                      </div>
                    ))}
                  </Slider>
                </AnimateOnScroll>
              )}
          </div>
      </div>
    </section>
  );
};

export default Testimonial;
