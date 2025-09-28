import React from 'react';

interface BankInfoProps {
  isVisible: boolean;
}

const BankInfo: React.FC<BankInfoProps> = ({ isVisible }) => {
  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      alert('계좌번호가 복사되었습니다.');
    });
  };

  return (
    <section 
      id="bank-info" 
      className={`bank-info ${isVisible ? 'section-visible' : ''}`}
    >
      <h2>마음 전하실 곳</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        멀리서도 축하의 마음을 전하고 싶으신 분들을 위해 계좌번호를 안내드립니다.<br />
        소중한 축하를 보내주셔서 감사드리며, 따뜻한 마음에 깊이 감사드립니다.
      </p>
      
      <div className="bank-sections">
        <div className="bank-section">
          <h3>신랑측</h3>
          
          <div className="bank-item">
            <h4>신랑</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 김도연</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
          
          <div className="bank-item">
            <h4>신랑 아버지</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 김종혁</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
          
          <div className="bank-item">
            <h4>신랑 어머니</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 최은혜</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
        </div>

        <div className="bank-section">
          <h3>신부측</h3>
          
          <div className="bank-item">
            <h4>신부</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 이지유</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
          
          <div className="bank-item">
            <h4>신부 아버지</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 이주영</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
          
          <div className="bank-item">
            <h4>신부 어머니</h4>
            <p>1111-1111-1111-1111</p>
            <p>카카오뱅크 강지은</p>
            <button className="copy-btn" onClick={() => copyToClipboard('1111-1111-1111-1111')}>
              복사
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankInfo;
