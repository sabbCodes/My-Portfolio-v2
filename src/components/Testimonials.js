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
      {
        name: 'Sumayya Hassan MD',
        message: `
          Hiiiii
          Just checked the link and it was superb! Really really cool! It baffled me to see that degree of skillfulness!!!

          I loved the little pop-ups when I either get it correct or wrong. Encouraging and a little witty. Super cool!

          One thing though...if the correct answer could be shown in green when one gets the answer wrong, that way one'd learn, or at least come to a realisation of a preexisting knowledge. 

          May Allah bless your skills and knowledge, increase in your capacity and open for you a zillion doors you never knew existed

          That's tremendously impressive 👍🏽
        `
      },
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
