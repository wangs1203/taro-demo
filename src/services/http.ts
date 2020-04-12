import Taro from '@tarojs/taro';
// import qs from 'qs';
import { showMsg } from 'utils/Toast';
import { TrAlert } from 'utils/Modal';
import {
  BASE_URL
  // HTTP_ERROR
} from '../config/index';
import { checkHttpStatus, setCookie, reqIntercept } from './utils';

export default class Request {
  private static request(options: API.Options, method?: API.Methods):Promise<API.Result> {
    const { url } = options;
    let stop: () => void = () => {};
    const abortPromise = new Promise<API.Result>((resolve, _reject) => {
      stop = () => {
        resolve({
          isOk: false,
          errMsg: 'request is abort'
        });
      };
    });
    const requestPromise = new Promise<API.Result>((resolve, _reject) => {
      Taro.request({
        ...options,
        method: method || 'GET',
        url: `${BASE_URL}${url}`,
        header: {
          'content-type': 'application/json;charset=UTF-8',
          cookie: Taro.getStorageSync('cookies'),
          ...options.header
        }
      }).then(setCookie)
        .then(checkHttpStatus)
        .then((response:API.Response) => {
          const {
            data
          } = response;
          console.log(response);
          const {
            commonRes,
            ...result
          } = data;
          const isSpecialPath = reqIntercept(url);
          if (commonRes && commonRes.isOk) {
            resolve({ result, isOk: true });
          } else if (isSpecialPath && response.errMsg === 'request:ok') {
            resolve({ result, isOk: true });
          } else {
            TrAlert({
              content: data.commonRes.message,
              success(res) {
                console.log(res);
                resolve({
                  isOk: false,
                  errMsg: data.commonRes.message,
                  code: 200
                });
              }
            });
          }
        })
        .catch((error) => {
          // console.log(error.message);
          // console.log(error.errMsg);
          const errorStr = error.errMsg || error.message;
          showMsg({ title: errorStr || '' }).then(() => {
            setTimeout(() => {
              resolve({
                isOk: false,
                code: error.response && error.response.statusCode ? error.response.statusCode : '',
                errMsg: errorStr
              });
            }, 1000);
          });
          // reject(error);
        });
    });
    const promiseWithAbort = Promise.race([abortPromise, requestPromise]);
    promiseWithAbort.abort = stop;
    return promiseWithAbort;
  }

  static get(options: API.Options) {
    return this.request({
      ...options
    });
  }

  static post(options: API.Options) {
    return this.request({
      ...options,
      data: options.data
      // data: qs.stringify(options.data)
    }, 'POST');
  }

  static put(options: API.Options) {
    return this.request({
      ...options,
      data: options.data
      // data: qs.stringify(options.data)
    }, 'PUT');
  }

  static delete(options: API.Options) {
    return this.request({
      ...options,
      data: options.data
      // data: qs.stringify(options.data)
    }, 'DELETE');
  }
}
