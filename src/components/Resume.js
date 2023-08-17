import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import ResumeLocation from "../assets/My Refactored Resume.pdf";

function Resume(){
    const resumePath = ResumeLocation;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <section id="resume" className="resume">
            <div className="resumeInner">
                <AnimateOnScroll>
                    <h1>My Resume</h1>
                    <div className="resumeBtn">
                        <button onClick={handleDownload}>Download My Resume</button>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Resume;