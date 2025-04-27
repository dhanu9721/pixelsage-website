import React, { useRef, useState } from 'react';
import '../css/Portfolio.css';

const portfolioItems = [
  { id: 1, title: 'Character Art', category: 'Character Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/1.png' },
  { id: 2, title: 'Slot Art', category: 'Slot Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/2.png' },
  { id: 3, title: 'Environment Art', category: 'Environment Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/3.png' },
  { id: 4, title: 'Character Art 2', category: 'Character Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/4.png' },
  { id: 5, title: 'Slot Art 2', category: 'Slot Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/5.png' },
  { id: 6, title: 'Environment Art 2', category: 'Environment Art', imageUrl: 'https://www.gamixlabs.com/assets/images/art-gallery/Slot-Characters/6.png' },
];

const categories = ['All', 'Slot Art', 'Character Art', 'Environment Art'];

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll function for left and right buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);  // For mobile touch support
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Sensitivity for faster dragging
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">Our Portfolio</h2>

      <div className="portfolio-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>

        <div
          className="portfolio-container"
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseMove={duringDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={duringDrag}
          onTouchEnd={stopDrag}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
};

export default Portfolio;
