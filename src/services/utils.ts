import Taro from '@tarojs/taro';
// import { queryAirportCnAndAbURL } from './apis';
/**
 * 检查http状态值
 * @param response
 * @returns {API.Response | void}
 */
// function checkHttpStatus(response: API.Response, resolve, reject): void {
//   if (response.statusCode >= 200 && response.statusCode < 300) {
//     resolve(response.data);
//   } else {
//     const message = HTTP_ERROR[response.statusCode] || `ERROR CODE: ${response.statusCode}`;
//     response.data.errorCode = response.statusCode;
//     response.data.error = message;
//     console.log(response);
//     reject(response.data);
//   }
// }
export function checkHttpStatus(response: API.Response): API.Response | void {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response;
  }
  console.log(response);
  // const message = HTTP_ERROR[response.statusCode] || `ERROR CODE: ${response.statusCode}`;
  const message = `连接失败！ERROR:${response.statusCode}`;
  const error = new Error(message);
  error.response = response;
  throw error;
}

/**
 * setCookie
 * @param response
 * @returns {API.Response}
 */
export function setCookie(response: API.Response) {
  if (response.cookies && response.cookies.length > 0) {
    let cookies = '';
    response.cookies.forEach((cookie, index) => {
      // windows的微信开发者工具返回的是cookie格式是有name和value的,在mac上是只是字符串的
      if (cookie.name && cookie.value) {
        cookies += index === response.cookies.length - 1
          ? `${cookie.name}=${cookie.value};expires=${cookie.expires};path=${cookie.path}`
          : `${cookie.name}=${cookie.value};`;
      } else {
        cookies += `${cookie};`;
      }
    });
    Taro.setStorageSync('cookies', cookies);
  }
  if (response.header && response.header['Set-Cookie']) {
    Taro.setStorageSync('cookies', response.header['Set-Cookie']);
  }
  return response;
}

/**
 * 请求特殊处理
 * @param {string} path
 */
export function reqIntercept(path:string) {
  const commonReqUrlList = [
  ].filter((item) => path.indexOf(item) !== -1);
  return commonReqUrlList.length > 0;
}
