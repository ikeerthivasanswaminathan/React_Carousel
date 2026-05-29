# Ex05 Image Carousel

## Date: 29/05/2026

## AIM
To create a Image Carousel using React 

## ALGORITHM

### STEP 1 Initial Setup:

Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:


Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:

Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
 - currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
 - currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:

The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:

Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM

### App.js

```
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
```

### App.js
```
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(135deg, #141e30, #243b55);
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.carousel-card {
  width: 90%;
  max-width: 850px;
  padding: 28px;
  border-radius: 24px;
  text-align: center;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  margin: 0;
  color: #ffffff;
  font-size: 38px;
  font-weight: 800;
}

.subtitle {
  color: #cbd5e1;
  margin: 8px 0 25px;
  font-size: 15px;
  letter-spacing: 1px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 430px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.45);
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.75);
  color: #ffffff;
  font-size: 28px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-btn:hover {
  background: #38bdf8;
  color: #0f172a;
}

.left {
  left: 18px;
}

.right {
  right: 18px;
}

.dots {
  margin: 22px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 13px;
  height: 13px;
  border: none;
  border-radius: 50%;
  background: #94a3b8;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  width: 32px;
  border-radius: 20px;
  background: #38bdf8;
}

footer {
  margin-top: 18px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
}

footer p {
  margin: 5px 0;
}
```

### index.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

### index.css

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", sans-serif;
}
```

## OUTPUT

### Image Slide 1

<img width="1919" height="1079" alt="ex5op1" src="https://github.com/user-attachments/assets/ba22086e-cd4b-417c-a48e-80ae747b5fbb" />

### Image Slide 2

<img width="1919" height="1079" alt="ex5op2" src="https://github.com/user-attachments/assets/3fa3f9f0-7be2-400f-bc1e-48e81eee2dcb" />

### Image Slide 3

<img width="1919" height="1079" alt="ex5op3" src="https://github.com/user-attachments/assets/fc0546e5-225c-46ca-ae67-89ec33fe1bda" />

### Image Slide 4

<img width="1919" height="1079" alt="ex5op4" src="https://github.com/user-attachments/assets/109e5ffb-d7fb-4b1b-96f8-bde315abc6da" />

## RESULT
The program for creating Image Carousel using React is executed successfully.
