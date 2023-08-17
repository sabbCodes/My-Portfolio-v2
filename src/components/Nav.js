import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Nav(){
    const location = useLocation();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    function handleNavOpen(){
        setIsNavOpen(!isNavOpen);
    }

    function handleLinkClick(){
        setIsNavOpen(false);
    };

    const shouldShowDots = location.pathname !== '/#home';

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 850);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='navigation-head'>
            <button
                className={`nav-toggle ${isNavOpen ? 'nav-open' : ''}`}
                aria-label="toggle navigation"
                onClick={handleNavOpen}
            >
                <span className="hamburger"></span>
            </button>
            {isDesktop ? (shouldShowDots && (
                <div className="dots-navigation">
                <a href='/#aboutMe' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>About Me</p>
                </a>
                <a href='/#whatIDo' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>What I Do</p>
                </a>
                <a href='/#skills' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>Skills</p>
                </a>
                <a href='/#resume' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>Resume</p>
                </a>
                <a href='/#portfolio' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>Portfolio</p>
                </a>
                <a href='/#testimonial' className="dotContainer">
                    <div className='dot'></div>
                    <p  className='dotLink'>Testimonials</p>
                </a>
                <a href='/#contact' className="dotContainer">
                    <div className='dot'></div>
                    <p className='dotLink'>Contact</p>
                </a>
            </div>
            )) : (
                <nav className={`navigation ${isNavOpen ? 'navigation-open' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a
                                href="/#aboutMe"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#whatIDo"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                What I Do
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#skills"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#resume"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Resume
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#portfolio"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#testimonial"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Testimonials
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="/#contact"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </section>
    );
};

export default Nav;