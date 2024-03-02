// global.d.ts
declare global {
  interface Window {
    Kakao: any;
  }
}

export const { Kakao } = window;
