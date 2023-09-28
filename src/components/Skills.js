import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import HTML from "../assets/skills images/html 1.png";
import CSS from "../assets/skills images/css 1.png";
import JavaScript from "../assets/skills images/js 1.png";
import REACT from "../assets/skills images/react_1 1.png";
import Bootstrap from "../assets/skills images/bootstrap_2 1.png";
import Typescript from "../assets/skills images/typescript_2 1.png";
import Sass from "../assets/skills images/sass 1.png";
import Tailwind from "../assets/skills images/R (4) 1.png";
import Figma from "../assets/skills images/figma.png";
import Firebase from "../assets/skills images/firebase.png";

function Skills(){
    return(
        <section id="skills" className="skills">
            <div className="skillsInner">
                <AnimateOnScroll>
                    <h1>My Skills</h1>
                    <div className="skillsWrapper">
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={HTML} alt="html icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={CSS} alt="css icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={JavaScript} alt="JavaScript icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={REACT} alt="React icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Bootstrap} alt="Bootstrap icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Typescript} alt="Typescript icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Sass} alt="Sass icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Tailwind} alt="Tailwind icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Figma} alt="Figma icon"/>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll>
                            <div className="skillImageContainer">
                                <img src={Firebase} alt="Firebase icon"/>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Skills;