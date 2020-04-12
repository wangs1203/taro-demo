declare module '*.bmp' {
  const src: string;
  export default src;
}
declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt',
    [key: string]: any
  }
};
declare interface Error {
  name: string;
  message: string;
  stack?: string;
  response: API.Response;
  errorCode: string | number;
}

declare interface Promise<T> {
  abort: () => void;
}
