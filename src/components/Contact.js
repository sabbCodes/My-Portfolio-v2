import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";

function Contact(){
    return(
        <section>
            <AnimateOnScroll>
                <h1>Get In Touch</h1>
                <p>Have a sweet project in mind or just want to say hi?</p>
                <p>Feel free to send me a message!</p>
                <form>
                    <label>
                        NAME
                        <input type="text" name="userName" />
                    </label>
                    <label>
                        EMAIL
                        <input type="email" name="userEmail" />
                    </label>
                    <label>
                        SUBJECT
                        <input type="text" name="messageSubject" />
                    </label>
                    <label>
                        MESSAGE
                        <input type="text" name="message" />
                    </label>
                    <button>SEND MESSAGE</button>
                </form>
            </AnimateOnScroll>
        </section>
    );
};

export default Contact;