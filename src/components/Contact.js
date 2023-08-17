import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mrgwpvqw");

    return (
        <section className="contact" id="contact">
            <div className="contactInner">
                <AnimateOnScroll>
                    <h1>Get In Touch</h1>
                    <p>Have a sweet project in mind or just want to say hi?</p>
                    <p>Feel free to send me a message!</p>
                    <form
                            className="contactForm"
                            action="https://formspree.io/f/mrgwpvqw"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <label>
                                NAME
                                <input type="text" name="name" required/>
                            </label>
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <label>
                                EMAIL
                                <input type="email" name="email" required/>
                            </label>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label>
                                SUBJECT
                                <input type="text" name="subject" required/>
                            </label>
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                            <label>
                                MESSAGE
                                <textarea name="message" required></textarea>
                            </label>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}>
                                {state.submitting ? 'Sending message...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    {state.succeeded ? (
                        <p>Thank you, I've received your message!</p>
                    ) : ""}
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Contact;