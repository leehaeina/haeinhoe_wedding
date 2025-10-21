import React, { useState, useRef } from 'react';
import './styles.css';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isClickRef = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    `${process.env.PUBLIC_URL}/love-story.png`,
    `${process.env.PUBLIC_URL}/love-story2.png`
  ];

  // 다음 이미지로
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // 이전 이미지로
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 터치 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
    isClickRef.current = true;
  };

  // 터치 이동
  const handleTouchMove = (e: React.TouchEvent) => {
    currentXRef.current = e.touches[0].clientX;
    const diff = Math.abs(currentXRef.current - startXRef.current);
    if (diff > 10) {
      isClickRef.current = false;
    }
  };

  // 터치 종료
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = startXRef.current - currentXRef.current;
    
    if (isClickRef.current) {
      // 탭
      e.preventDefault();
      e.stopPropagation();
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const tapX = startXRef.current - rect.left;
        if (tapX < rect.width / 2) {
          goToPrev();
        } else {
          goToNext();
        }
      }
    } else if (Math.abs(diffX) > 50) {
      // 스와이프
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  // 마우스 다운
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    isClickRef.current = true;
  };

  // 마우스 이동
  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      currentXRef.current = e.clientX;
      const diff = Math.abs(currentXRef.current - startXRef.current);
      if (diff > 10) {
        isClickRef.current = false;
      }
    }
  };

  // 마우스 업
  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const diffX = startXRef.current - currentXRef.current;
    
    if (isClickRef.current) {
      // 클릭
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
          goToPrev();
        } else {
          goToNext();
        }
      }
    } else if (Math.abs(diffX) > 50) {
      // 드래그
      if (diffX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <div className="app-container">
      <div 
        ref={containerRef}
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div 
          className="slider-wrapper" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img 
                src={image}
                alt={`사랑 이야기 ${index + 1}`} 
                className="love-story-image"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 인디케이터 (점) */}
      <div className="slider-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
