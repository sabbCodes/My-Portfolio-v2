import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

function WhatIDo(){
    return(
        <section id="whatIDo" className="whatIDo">
            <div className="whatIDoInner">
                <AnimateOnScroll>
                    <h1>What I Do</h1>
                </AnimateOnScroll>
                <div className="whatIDoGrid">
                    <AnimateOnScroll>
                        <div className="webDev">
                            <h2>Web Development</h2>
                            <p>
                                I craft seamless and meticulously designed web applications, leveraging the power of React, JavaScript, CSS, and HTML.
                                An array of libraries and APIs are at my disposal, empowering me to transform imaginative concepts into tangible creations.
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className="uiDesign">
                            <h2>UI Design</h2>
                            <p>
                                I specialize in creating beautiful and user-friendly website designs.
                                I focus on making sure your site looks fantastic, works smoothly, and leaves a positive impression on your visitors.
                                Let's bring your vision to life!
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className="uxDesign">
                            <h2>UX Design</h2>
                            <p>
                                I dive deep into understanding your audience, ensuring that every interaction with your website is seamless, enjoyable, and aligned with your goals.
                                Let's create a digital space that truly connects and engages your users.
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className="wordpressDev">
                            <h2>Wordpress Development</h2>
                            <p>
                                I'm a WordPress enthusiast, turning your ideas into dynamic and functional websites.
                                Whether you need a blog, a business site, or an online store, I bring the magic of WordPress to make it happen.
                                Let's build a site that's easy to manage, looks great, and helps you succeed online!
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;