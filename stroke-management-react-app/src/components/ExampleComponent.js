// src/components/ExampleComponent.jsx
import React from 'react';
import './ExampleComponent.css';
import Slider from 'react-slick';

const ExampleComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="example-component">
            <header className="header">
                <div className="logo">Company Logo</div>
                <nav className="navigation">
                    <ul>
                        <li><a href="#login">Login</a></li>
                        <li><a href="#demo">Demo</a></li>
                        <li><a href="#about">About Us</a></li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </header>

            <div className="content">
                <Slider {...settings} className="scrolling-pictures">
                    <div>
                        <img src="https://via.placeholder.com/800x400" alt="Placeholder 1" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/800x400" alt="Placeholder 2" />
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/800x400" alt="Placeholder 3" />
                    </div>
                    {/* Add more image slides as needed */}
                </Slider>

                <div className="main-content">
                    {/* Your main content goes here */}
                    {/* Add text, images, and other elements as needed */}
                </div>
            </div>
        </div>
    );
};

export default ExampleComponent;
