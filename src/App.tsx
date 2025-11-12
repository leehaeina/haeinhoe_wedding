import React from 'react';
import './styles.css';

const App: React.FC = () => {
  const mainImage = `${process.env.PUBLIC_URL}/card_vertical.png`;

  return (
    <div className="app-container">
      <div className="image-frame">
        <img
          src={mainImage}
          alt="해인과 호의 러브스토리"
          className="love-story-image"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default App;
