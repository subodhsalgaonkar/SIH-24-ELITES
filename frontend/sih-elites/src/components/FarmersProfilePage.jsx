import React from 'react';
import './farmers.css';
// import certification from './certification.pdf';
import wheatImg from './images.jpeg';
//import cornImg from './corn.jpg';
//import tomatoesImg from './tomatoes.jpg';

const FarmersProfilePage = () => {
    React.useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.currentTarget.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const anchors = document.querySelectorAll('.navbar a');
        anchors.forEach(anchor => anchor.addEventListener('click', handleScroll));

        return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleScroll));
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div className="navbar">
                <ul>
                    <li><a href="#personal-info">Personal Info</a></li>
                    <li><a href="#crop-info">Crop Info</a></li>
                    <li><a href="#rating-reviews">Rating/Reviews</a></li>
                    <li><a href="#documents">Documents</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
                {/* Personal Info Section */}
                <section id="personal-info">
                    <h2>Personal Info</h2>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Contact:</strong> +1234567890</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Experience:</strong> 10 years</p>
                </section>

                {/* Crop Info Section */}
                <section id="crop-info">
                    <h2>Crop Info</h2>
                    <p><strong>Farm:</strong> Green Valley Farm</p>
                    <p><strong>Crops Grown:</strong> Wheat, Corn, Tomatoes</p>
                    <p><strong>Farming Methods:</strong> Organic, Hydroponic</p>
                    <div className="crop-images">
                        <h3>Photos of Crops</h3>
                        <img src={wheatImg} alt="Wheat" />
                        {/* <img src={cornImg} alt="Corn" /> */}
                        {/* <img src={tomatoesImg} alt="Tomatoes" /> */}
                    </div>
                </section>

                {/* Rating/Reviews Section */}
                <section id="rating-reviews">
                    <h2>Rating/Reviews</h2>
                    <p><strong>Rating:</strong> 4.5/5</p>
                    <p><strong>Reviews:</strong></p>
                    <ul>
                        <li>Excellent produce quality! - Alice</li>
                        <li>Very professional and timely delivery. - Bob</li>
                    </ul>
                </section>

                {/* Documents Section */}
                <section id="documents">
                    <h2>Documents</h2>
                    <p>Verifiable document for organic farming certification:</p>
                    {/* <a href={certification} download>Download Certification Document</a> */}
                </section>
            </div>
        </div>
    );
};

export default FarmersProfilePage;
