import React from 'react';

interface GalleryProps {
  isVisible: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isVisible }) => {
  return (
    <section 
      id="gallery" 
      className={`gallery ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>우리의 시간</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-image">📸</div>
          <div className="timeline-content">
            <h3>첫 만남</h3>
            <p>저희는 발리에서<br />처음 만났어요.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-image">📸</div>
          <div className="timeline-content">
            <h3>1주년</h3>
            <p>함께한 1년<br />서로를 알아가는 시간<br />이었어요.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-image">📸</div>
          <div className="timeline-content">
            <h3>2주년</h3>
            <p>함께한 2년<br />우리는 결혼을 결심했어요.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-image">📸</div>
          <div className="timeline-content">
            <h3>WeddingDay</h3>
            <p>저희는 이날 결혼해요.<br />저희의 시작을<br />축하해주세요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
