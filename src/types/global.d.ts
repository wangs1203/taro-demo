/**
 * 此声明文件 依赖于node react react-dom的全局声明环境
 * Triple-Slash Directives 三重斜线指令
 * 三斜杠指令是包含单个XML标记的单行注释。注释的内容用作编译器指令。
 * 三斜杠指令仅在其包含文件的顶部有效。三斜杠指令只能在单行或多行注释之前，包括其他三重斜杠指令。如果在声明或声明之后遇到它们，则将它们视为常规单行注释，并且没有特殊含义。
 * If your library depends on a global library, use a /// <reference types="..." /> directive:
 */
/// <reference types="node" />

// declare namespace NodeJS {
//   interface ProcessEnv {
//     readonly NODE_ENV: 'development' | 'production' | 'test';
//     readonly PUBLIC_URL: string;
//   }
// }

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp';
    [key: string]: any;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

