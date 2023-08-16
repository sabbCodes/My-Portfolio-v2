import React, { useState } from 'react';

function Nav(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    function handleNavOpen(){
        setIsNavOpen(!isNavOpen);
    }

    function handleLinkClick(){
        setIsNavOpen(false);
    };

    return (
        <section className='navigation-head'>
            <button
                className={`nav-toggle ${isNavOpen ? 'nav-open' : ''}`}
                aria-label="toggle navigation"
                onClick={handleNavOpen}
            >
                <span className="hamburger"></span>
            </button>
            <nav className={`navigation ${isNavOpen ? 'navigation-open' : ''}`}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a
                            href="#about"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#whatIDo"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            What I Do
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#skills"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#experience"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            Experience
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#portfolio"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#testimonial"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            Testimonial
                        </a>
                    </li>
                    <li className="nav__item">
                        <a
                            href="#contact"
                            className="nav__link"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Nav;