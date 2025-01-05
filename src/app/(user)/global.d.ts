declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

export {}; // 이 파일이 모듈임을 명시
