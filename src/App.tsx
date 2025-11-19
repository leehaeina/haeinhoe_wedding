import React from 'react';
import './styles.css';

const App: React.FC = () => {
  const mainImage = `${process.env.PUBLIC_URL}/wedding-card-.png`;

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
          top: 1995,
          left: 60,
          background: '#486CB5',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: 6
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
      </div>
    </div>
  );
};

export default App;
