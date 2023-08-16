import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

function Resume(){
    const resumePath = "../assets/My Refactored Resume.pdf";

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
            <AnimateOnScroll>
                <div className="resumeInner">
                    <AnimateOnScroll>
                        <h1>My Resume</h1>
                        <div className="resumeBtn">
                            <button onClick={handleDownload}>Download My Resume</button>
                        </div>
                    </AnimateOnScroll>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default Resume;