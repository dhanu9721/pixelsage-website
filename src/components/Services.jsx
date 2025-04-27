import React from 'react';
import '../css/Services.css';

// Service data
const services = [
  {
    id: 1,
    title: 'Game Development',
    icon: '🎮', // Placeholder icon
    description: 'We craft immersive, high-quality gaming experiences with cutting-edge technologies.',
  },
  {
    id: 2,
    title: 'Art & Design',
    icon: '🎨', // Placeholder icon
    description: 'From concept art to in-game visuals, we create stunning and creative art designs.',
  },
  {
    id: 3,
    title: 'Publishing',
    icon: '📦', // Placeholder icon
    description: 'We help bring your game to life on multiple platforms and ensure it reaches a global audience.',
  },
];

const Services = () => {
  return (
    <section id="services"className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">What we can do for you</p>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
