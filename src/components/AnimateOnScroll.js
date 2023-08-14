import React, { useEffect, useRef } from 'react';

const AnimateOnScroll = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.5, // Adjust this threshold based on when you want the animation to start
      }
    );

    const element = ref.current;
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return <div ref={ref} className="animated">{children}</div>;
};

export default AnimateOnScroll;
