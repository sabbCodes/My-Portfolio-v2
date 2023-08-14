import React from "react";
import myAvi from "../assets/images/my-avi.jpg";
import AnimateOnScroll from "./AnimateOnScroll";

function AboutMe(){
    return(
        <section id="aboutMe" className="aboutMe">
            <div className="aboutMeInner">
                <div className="aboutMeHeader">
                    <AnimateOnScroll>
                        <h2 className="nameTitle">Hi, I'm Abbas.</h2>
                        <p>
                            A skilled <span className="lighten">frontend engineer</span> with a keen eye for detail and a strong design sensibility.
                        </p>
                    </AnimateOnScroll>
                </div>
                <div className="aboutMeImage">
                    <AnimateOnScroll>
                        <img id="myAvi" src={myAvi} alt="Sabb' placeholder avi" />
                    </AnimateOnScroll>
                </div>
                <div className="aboutMeText">
                    <AnimateOnScroll>
                        <p>
                            <span className="lighten">I'm a third-year medical student at Bayero University in Kano, Nigeria.</span> I have a passion for both medicine and programming, and I'm enthusiastic about creating projects that have broad utility.
                            My experience spans from basic static web pages to intricate multi-page websites with interactive features. I'm dedicated to ensuring user-friendly accessibility and crafting intuitive, easy-to-use interfaces in my applications, always going the extra mile.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p>
                            My primary focus lies in developing applications that hold significant value within the healthcare sector, utilizing every available tool to create top-notch solutions.
                            I'm passionate about continuous learning and applying that knowledge to construct real-world web applications.
                        </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <p>
                            <span className="lighten">When I'm not in front of my PC screen</span>, you'll often find me engaged in a mix of activities.
                            I enjoy playing video games as well as diving into medical textbooks, exploring fascinating random facts, reading journals, and getting lost in the pages of fictional novels.
                        </p>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;