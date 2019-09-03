import { getRootPath } from "../utils/common";
const getBaseUrl = () => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'https://m.flycua.com/h5';
    // BASE_URL = getRootPath()+'/h5';
  } else {
    // 生产环境
    BASE_URL = 'https://m.flycua.com/h5';
  }
  return BASE_URL;
}

export default getBaseUrl;
