import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
// import { useLocation } from 'react-router-dom';


function Nav(){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [shouldShowDots, setShouldShowDots] = useState(true);

    function handleNavOpen(){
        setIsNavOpen(!isNavOpen);
    }

    function handleLinkClick(){
        setIsNavOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 850);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home'); // Adjust with your home section's ID
            if (homeSection) {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const homeOffsetTop = homeSection.offsetTop;

                // Check if user has scrolled past the home section
                if (scrollTop > homeOffsetTop) {
                    setShouldShowDots(true);
                } else {
                    setShouldShowDots(false);
                }
            }
            console.log('Location Hash:', window.location.hash);
            // const shouldShowDots = window.location.hash !== '#aboutMe';
            console.log(shouldShowDots)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [shouldShowDots]);

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
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Home</p>
                    </Link>
                    {/* <a href='/#home' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>Home</p>
                    </a> */}
                    <Link
                        to="aboutMe"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>About Me</p>
                    </Link>
                    {/* <a href='/#aboutMe' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>About Me</p>
                    </a> */}
                    <Link
                        to="whatIDo"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>What I Do</p>
                    </Link>
                    {/* <a href='/#whatIDo' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>What I Do</p>
                    </a> */}
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Skills</p>
                    </Link>
                    {/* <a href='/#skills' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>Skills</p>
                    </a> */}
                    <Link
                        to="resume"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Resume</p>
                    </Link>
                    {/* <a href='/#resume' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>Resume</p>
                    </a> */}
                    <Link
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Portfolio</p>
                    </Link>
                    {/* <a href='/#portfolio' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>Portfolio</p>
                    </a> */}
                    <Link
                        to="testimonial"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Testimonials</p>
                    </Link>
                    {/* <a href='/#testimonial' className="dotContainer">
                        <div className='dot'></div>
                        <p  className='dotLink'>Testimonials</p>
                    </a> */}
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="dotContainer"
                    >
                        <div className='dot'></div>
                        <p className='dotLink'>Contact</p>
                    </Link>
                    {/* <a href='/#contact' className="dotContainer">
                        <div className='dot'></div>
                        <p className='dotLink'>Contact</p>
                    </a> */}
                </div>
            )) : (
                <nav className={`navigation ${isNavOpen ? 'navigation-open' : ''}`}>
                    <ul className="nav__list">
                    <li className="nav__item">
                            <a
                                href="/#home"
                                className="nav__link"
                                onClick={handleLinkClick}
                            >
                                Home
                            </a>
                        </li>
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