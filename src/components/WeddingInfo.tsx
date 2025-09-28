import React from 'react';

interface WeddingInfoProps {
  isVisible: boolean;
}

const WeddingInfo: React.FC<WeddingInfoProps> = ({ isVisible }) => {
  const handleLocationClick = (): void => {
    const address = '제주특별자치도 서귀포시 중앙로 105';
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}`;
    
    if (window.confirm('지도에서 장소를 확인하시겠습니까?')) {
      window.open(mapUrl, '_blank');
    }
  };

  return (
    <section 
      id="wedding-info" 
      className={`wedding-info ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>오시는 길</h2>
      <div className="info-grid">
        <div className="info-item" onClick={handleLocationClick}>
          <i className="fas fa-map-marker-alt"></i>
          <div className="info-content">
            <h3>더살롱드웨딩홀</h3>
            <p>1층 레터홀</p>
            <p>제주특별자치도 서귀포시 중앙로 105</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-bus"></i>
          <div className="info-content">
            <h3>버스</h3>
            <p>000번, 000번, 000번</p>
            <p>살롱드레터 정류소 하차 후 도보 3분</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-subway"></i>
          <div className="info-content">
            <h3>지하철</h3>
            <p>1호선: 살롱드레터 역 1번 출구 하차</p>
            <p>2호선: 살롱드레터 역 2번 출구 하차</p>
            <p>출구 나와서 우측 신호등 건너 셔틀버스 탑승 또는 도보 5분</p>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-car"></i>
          <div className="info-content">
            <h3>자차</h3>
            <p>살롱드레터 주차장 검색</p>
            <p>살롱드레터 웨딩홀 검색</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;
