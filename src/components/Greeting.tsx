import React from 'react';

interface GreetingProps {
  isVisible: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isVisible }) => {
  return (
    <section 
      id="greeting" 
      className={`greeting ${isVisible ? 'section-visible' : ''}`}
    >
      <div className="quote">
        "You can not be happy every day.<br />
        But there are happy things every day."
        <br /><br />
        매일 행복할 순 없지만,<br />
        행복한 것들은 매일 있어.
        <br /><br />
        <em>&lt;월트 디즈니&gt;, 곰돌이 푸 中</em>
      </div>
      <h2 className="greeting-title">저희 결혼합니다</h2>
      <div className="greeting-content">
        <p>저희의 결혼 소식이</p>
        <p>부담스럽지 않게 다가가길 바라며,</p>
        <p>편한 마음으로 오셔서</p>
        <p>축하해주시면 감사하겠습니다.</p>
        <br />
        <p>혹여 참석이 어려우시더라도 부담 갖지 마시고,</p>
        <p>마음으로 축하해주시면 감사하겠습니다.</p>
      </div>
    </section>
  );
};

export default Greeting;
