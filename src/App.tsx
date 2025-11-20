import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const App: React.FC = () => {
  const mainImage = `${process.env.PUBLIC_URL}/wedding-card.png`;
  const overlayPhotos = [
    `${process.env.PUBLIC_URL}/001.jpeg`,
    `${process.env.PUBLIC_URL}/002.jpeg`,
    `${process.env.PUBLIC_URL}/003.jpeg`,
    `${process.env.PUBLIC_URL}/004.jpeg`,
    `${process.env.PUBLIC_URL}/005.jpeg`,
  
  ];

  const [toastMessage, setToastMessage] = useState('');
  const toastTimeoutRef = useRef<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage('');
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const copyBankAccount = async (bankAccount: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(bankAccount);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = bankAccount;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      showToast('계좌번호가 복사되었어요!');
    } catch (error) {
      console.error(error);
      showToast('복사에 실패했어요. 직접 확인해 주세요.');
    }
  };

  return (
    <div className="app-container">
      <div className="image-frame">
        <img
          src={mainImage}
          alt="해인과 호의 러브스토리"
          className="love-story-image"
          draggable={false}
        />
        <div
          style={{
            position: 'absolute',
            top: '88%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '75%',
            borderRadius: 20,
            boxShadow: '0 18px 40px rgba(0,0,0,0.2)',
            border: '5px solid #fff',
            overflow: 'hidden',
            background: '#fff',
          }}
        >
          <img
            src={overlayPhotos[currentPhotoIndex]}
            alt={`행복한 순간 ${currentPhotoIndex + 1}`}
            style={{
              width: '100%',
              height: 370,
              display: 'block',
              objectFit: 'contain',
              backgroundColor: '#fff',
            }}
          />
          <button
            type="button"
            onClick={() =>
              setCurrentPhotoIndex(
                (prev) => (prev - 1 + overlayPhotos.length) % overlayPhotos.length
              )
            }
            style={{
              position: 'absolute',
              top: '50%',
              left: 8,
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}
            aria-label="이전 사진"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentPhotoIndex((prev) => (prev + 1) % overlayPhotos.length)
            }
            style={{
              position: 'absolute',
              top: '50%',
              right: 8,
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}
            aria-label="다음 사진"
          >
            ›
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 6,
            }}
          >
            {overlayPhotos.map((_, index) => (
              <span
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background:
                    index === currentPhotoIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </div>
        </div>
        <div
        style={{
          position: 'absolute',
          top: '53.5%',
          left: '50%',
          background: '#486CB5',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: 6,
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            font: "normal normal 400 12px/normal dotum, sans-serif",
            width: 220,
            height: 250,
            color: "#333",
            position: "relative",
          }}
        >
          <div style={{ height: 200 }}>
            <a
              href="https://map.kakao.com/?urlX=523258.9999999973&amp;urlY=1072298.0000000016&amp;itemId=932183710&amp;q=NAVER%EA%B7%B8%EB%A6%B0%ED%8C%A9%ED%86%A0%EB%A6%AC&amp;srcid=932183710&amp;map_type=TYPE_MAP&amp;from=roughmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="map"
                src="http://t1.daumcdn.net/roughmap/imgmap/7857abe433dea77cc81a9be4b22ebeb43a90db826a85c2dc06fd1138b153a565"
                width="218"
                height="198"
                style={{ border: "1px solid #ccc" }}
                alt="카카오맵 미리보기"
              />
            </a>
          </div>
          <div
            style={{
              overflow: "hidden",
              padding: "7px 11px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "0px 0px 2px 2px",
              backgroundColor: "rgb(249, 249, 249)",
            }}
          >
            <a
              href="https://map.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width="72"
                height="16"
                alt="카카오맵"
                style={{ display: "block", width: 72, height: 16 }}
              />
            </a>
            <div
              style={{
                float: "right",
                position: "relative",
                top: 1,
                fontSize: 11,
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com/?from=roughmap&amp;srcid=932183710&amp;confirmid=932183710&amp;q=NAVER%EA%B7%B8%EB%A6%B0%ED%8C%A9%ED%86%A0%EB%A6%AC&amp;rv=on"
                style={{
                  float: "left",
                  height: 15,
                  paddingTop: 1,
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                로드뷰
              </a>
              <span
                style={{
                  width: 1,
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: 11,
                  verticalAlign: "top",
                  position: "relative",
                  top: 2,
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com/?from=roughmap&amp;eName=NAVER%EA%B7%B8%EB%A6%B0%ED%8C%A9%ED%86%A0%EB%A6%AC&amp;eX=523258.9999999973&amp;eY=1072298.0000000016"
                style={{
                  float: "left",
                  height: 15,
                  paddingTop: 1,
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                길찾기
              </a>
              <span
                style={{
                  width: 1,
                  padding: 0,
                  margin: "0 8px 0 9px",
                  height: 11,
                  verticalAlign: "top",
                  position: "relative",
                  top: 2,
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=932183710&amp;itemId=932183710&amp;q=NAVER%EA%B7%B8%EB%A6%B0%ED%8C%A9%ED%86%A0%EB%A6%AC&amp;urlX=523258.9999999973&amp;urlY=1072298.0000000016"
                style={{
                  float: "left",
                  height: 15,
                  paddingTop: 1,
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                지도 크게 보기
              </a>
            </div>
          </div>
          <div>
            <span
              style={{
                borderBottom: "0px none #333333",
                position: "absolute",
                left: -25,
                top: -136,
                width: 0,
                height: 40,
              }}
            />
          </div>
        </div>
        </div>

        <div
          role="button"
          tabIndex={0}
          aria-label="신한 110-485-841070 복사"
          onClick={() => copyBankAccount('신한 110-485-841070')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              copyBankAccount('신한 110-485-841070');
            }
          }}
          style={{
            position: 'absolute',
            top: '77.15%',
            left: '66.42%',
            width: '5%',
            height: '0.5%',
            cursor: 'pointer',
      // border:'1px solid blue'
          }}
        ></div>

        <div
          role="button"
          tabIndex={0}
          aria-label="신한 110-485-841070 복사"
          onClick={() => copyBankAccount('신한 110-356-035859')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              copyBankAccount('신한 110-356-035859');
            }
          }}
          style={{
            position: 'absolute',
            top: '78.51%',
            left: '66.2%',
            width: '5%',
            height: '0.5%',
            cursor: 'pointer',
          // border:'1px solid red'
          }}
        ></div>
      
      </div>
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">{toastMessage}</div>
        </div>
      )}
    </div>
  );
};

export default App;
