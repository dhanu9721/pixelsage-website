import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import sageBg from '../assets/BFG.png'; // background 1
import secondBg from '../assets/hero-banner.jpg'; // background 2
import thirdBg from '../assets/SplashScreen.png'; // background 3
import sageImg from '../assets/Sage.png'; // icon for first
import secondImg from '../assets/Sage.png'; // icon for second
import thirdImg from '../assets/Sage.png'; // icon for third
import '../css/Hero.css';

const Hero = () => {
  const slides = [
    {
      bg: sageBg,
      img: sageImg,
      title: "Welcome to Pixelsage",
      subtitle: "Your creative gaming partner",
    },
    {
      bg: secondBg,
      img: secondImg,
      title: "Innovate Your Ideas",
      subtitle: "Bringing your games to life",
    },
    {
      bg: sageBg,
      img: thirdImg,
      title: "Unleash Creativity",
      subtitle: "Design, Develop, Deliver",
    },
  ];

  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              <div className="hero-content">
                <img className="hero-logo" src={slide.img} alt="Slide Logo" />
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
