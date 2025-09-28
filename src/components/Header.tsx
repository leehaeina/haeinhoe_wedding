import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <p className="wedding-date">2025년 5월 18일 일요일 오후 1시 30분</p>
      <div className="couple-names">
        <h1 className="groom-name">김도연</h1>
        <div className="ampersand">&</div>
        <h1 className="bride-name">이지유</h1>
      </div>
      <p className="venue-info">더살롱드웨딩홀 1층 레터홀</p>
    </header>
  );
};

export default Header;
