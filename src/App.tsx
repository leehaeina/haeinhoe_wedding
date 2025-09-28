import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Greeting from './components/Greeting';
import CoupleIntro from './components/CoupleIntro';
import WeddingInterview from './components/WeddingInterview';
import Gallery from './components/Gallery';
import WeddingInfo from './components/WeddingInfo';
import RSVP from './components/RSVP';
import BankInfo from './components/BankInfo';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Intersection Observer를 사용한 스크롤 애니메이션
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections(prev => new Set([...Array.from(prev), entry.target.id]));
        }
      });
    }, observerOptions);

    // 모든 섹션에 관찰자 적용
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // 페이지 로드 완료 메시지
    console.log('모바일 청첩장이 로드되었습니다. 💕');

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="invitation-container">
      <Header />
      <MainImage />
      <Greeting isVisible={visibleSections.has('greeting')} />
      <CoupleIntro isVisible={visibleSections.has('couple-intro')} />
      <WeddingInterview isVisible={visibleSections.has('wedding-interview')} />
      <Gallery isVisible={visibleSections.has('gallery')} />
      <WeddingInfo isVisible={visibleSections.has('wedding-info')} />
      <RSVP isVisible={visibleSections.has('rsvp')} />
      <BankInfo isVisible={visibleSections.has('bank-info')} />
      <Guestbook isVisible={visibleSections.has('guestbook')} />
      <Footer />
    </div>
  );
};

export default App;
