import React from 'react';

interface WeddingInterviewProps {
  isVisible: boolean;
}

const WeddingInterview: React.FC<WeddingInterviewProps> = ({ isVisible }) => {
  return (
    <section 
      id="wedding-interview" 
      className={`interview ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>웨딩 인터뷰</h2>
      <div className="interview-content">
        <div className="interview-item">
          <h3 className="interview-question">1. 결혼하시는 소감이 어떠세요?</h3>
          <div className="interview-answer">
            <p className="answer-person">🤵🏻‍♂️ 도연</p>
            <p>인생은 지금부터 시작인 것 같아요.<br />
            앞으로 매일 함께 맛있는 밥을 먹고, 함께 기뻐하고, 함께 여행하고 모든 것을 언제나 함께할 수 있다는 생각에 벌써부터 행복합니다.😁</p>
            <br />
            <p className="answer-person">👰🏻‍♀️ 지유</p>
            <p>매일 데이트하고 헤어질 때 마다 아쉬웠는데 이제는 매일 함께 있을 수 있어서 행복해요.💗<br />
            어떻게 하루를 보냈는지 이야기하고 마주보며 웃는 그런 소박한 나날들을 보낼 생각에 설레입니다.🥰</p>
          </div>
        </div>

        <div className="interview-item">
          <h3 className="interview-question">2. 처음에 어떻게 만나셨어요?</h3>
          <div className="interview-answer">
            <p>인도네시아 여행 중에 여행가방을 통째로 잃어버려 어쩔 줄 몰라 하고 있을 때, 남편의 도움으로 가방도 찾고 무사히 귀국할 수 있었어요.<br />
            그 모습이 어찌나 멋지고 듬직하던지 잊혀지지가 않습니다.💕</p>
          </div>
        </div>

        <div className="interview-item">
          <h3 className="interview-question">3. 신혼여행은 어디로 가시나요?</h3>
          <div className="interview-answer">
            <p>바다를 좋아하는 저희는, 14박 15일 몰디브🏝로 떠납니다.✈️</p>
          </div>
        </div>

        <div className="interview-item">
          <h3 className="interview-question">4. 신혼집은 어디인가요?</h3>
          <div className="interview-answer">
            <p>직장이랑 가까운 행복동에 작은 아파트에서 새로운 시작을 하기로 했습니다.<br />
            우리의 취향을 듬뿍 담아 인테리어 중인데, 입주날이 기다려집니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInterview;
