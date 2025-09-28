import React from 'react';

interface CoupleIntroProps {
  isVisible: boolean;
}

const CoupleIntro: React.FC<CoupleIntroProps> = ({ isVisible }) => {
  return (
    <section 
      id="couple-intro" 
      className={`couple-intro ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>신랑신부 소개</h2>
      <div className="couple-profiles">
        <div className="profile-card">
          <h3 className="profile-name">신랑 김도연</h3>
          <p className="profile-details">93년 8월 3일</p>
          <p className="profile-details">서울 강동구</p>
          <p className="profile-job">IT 개발자 💻</p>
          <div className="family-info">
            <p>故 김종혁 · 故 최은혜 의 장남</p>
          </div>
        </div>
        <div className="profile-card">
          <h3 className="profile-name">신부 이지유</h3>
          <p className="profile-details">95년 8월 3일</p>
          <p className="profile-details">경기도 용인</p>
          <p className="profile-job">디자이너 🎨</p>
          <div className="family-info">
            <p>故 이주영 · 故 강지은 의 장녀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;
