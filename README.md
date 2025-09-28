# 모바일 청첩장 React 앱 💕

React 19와 TypeScript로 제작된 반응형 모바일 청첩장 웹 애플리케이션입니다.

## 특징

- 📱 **모바일 최적화**: 스마트폰에서 최적의 사용자 경험 제공
- 🎨 **아름다운 디자인**: 그라데이션과 애니메이션을 활용한 세련된 UI
- ⚡ **빠른 로딩**: React 19의 최적화된 렌더링으로 빠른 페이지 로딩
- 📞 **인터랙티브**: 전화 걸기, 지도 열기 등 사용자 상호작용 지원
- 🌐 **반응형**: 다양한 화면 크기에 대응
- ⚛️ **React 19 기반**: 최신 React 기능을 활용한 컴포넌트 기반 아키텍처
- 🔷 **TypeScript**: 타입 안전성을 보장하는 강력한 개발 환경

## 설치 및 실행

### 필요 조건
- Node.js (v14 이상)
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```
개발 서버가 http://localhost:3000 에서 실행됩니다.

### 프로덕션 빌드
```bash
npm run build
```

### 빌드된 앱 실행
```bash
npm run serve
```

## 커스터마이징

### 신랑/신부 정보 변경
`src/components/Header.tsx` 파일에서 다음 부분을 수정하세요:

```tsx
<h1 className="groom-name">김신랑</h1>
<h1 className="bride-name">이신부</h1>
<p className="wedding-date">2024년 3월 15일 토요일 오후 2시</p>
```

### 결혼식 정보 변경
- 날짜/시간: `src/components/Header.tsx`
- 장소/교통편: `src/components/WeddingInfo.tsx`
- 연락처: `src/components/Contact.tsx`
- 가족 정보: `src/components/FamilyInfo.tsx`

### 스타일 변경
`src/styles.css` 파일에서 색상, 폰트, 레이아웃을 자유롭게 수정할 수 있습니다.

## 파일 구조

```
mobile-wedding-invitation/
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── components/         # React 컴포넌트들
│   │   ├── Header.tsx      # 헤더 컴포넌트
│   │   ├── MainImage.tsx   # 메인 이미지 컴포넌트
│   │   ├── Greeting.tsx    # 인사말 컴포넌트
│   │   ├── WeddingInfo.tsx # 결혼식 정보 컴포넌트
│   │   ├── FamilyInfo.tsx  # 가족 소개 컴포넌트
│   │   ├── Contact.tsx     # 연락처 컴포넌트
│   │   └── Footer.tsx      # 푸터 컴포넌트
│   ├── App.tsx             # 메인 App 컴포넌트
│   ├── index.tsx           # React 앱 진입점
│   └── styles.css          # CSS 스타일시트
├── package.json            # 프로젝트 설정
├── tsconfig.json           # TypeScript 설정
└── README.md               # 프로젝트 설명서
```

## 기술 스택

- React 19
- TypeScript 5.0
- CSS3 (Flexbox, Grid, 애니메이션)
- Font Awesome (아이콘)
- Google Fonts (Noto Sans KR)

## 브라우저 지원

- Chrome (권장)
- Safari
- Firefox
- Edge
- 모바일 브라우저

## 라이선스

이 프로젝트는 개인/상업적 용도로 자유롭게 사용할 수 있습니다.

---

💕 행복한 결혼을 축하합니다! 💕
