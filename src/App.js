import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
const images = [
  "https://picsum.photos/id/1015/900/500",
  "https://picsum.photos/id/1016/900/500",
  "https://picsum.photos/id/1018/900/500",
  "https://picsum.photos/id/1020/900/500",
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="app">
      <div className="carousel-card">
        <h1>Dynamic Image Showcase</h1>
        <p className="subtitle">Nature Image Carousel</p>

        <div className="carousel">
          <img
            src={images[currentIndex]}
            alt={`Carousel ${currentIndex + 1}`}
            onError={(e) => {
              e.target.src = "https://picsum.photos/900/500";
            }}
          />

          <button className="nav-btn left" onClick={prevImage}>
            ❮
          </button>

          <button className="nav-btn right" onClick={nextImage}>
            ❯
          </button>
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <footer>
          <p>Developed by: KEERTHIVASAN S</p>
          <p>Register Number: 212223220046</p>
        </footer>
      </div>
    </div>
  );
}

export default App;