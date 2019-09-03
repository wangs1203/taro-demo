import Taro from '@tarojs/taro';
import getBaseUrl from './base';
import interceptors from './interceptors';

declare type Methohs = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
declare type Headers = {[key :string]:string};
declare type Datas = {[key: string] : any;};

interface Options {
  url: string;
  host?: string;
  data?: Datas;
  method?: Methohs;
  header?: Headers;
  // header?: {
  //   'content-type': string;
  //   'Authorization': any;
  // },
  contentType?: string
}

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

class httpRequest {
  // constructor(){

  // }
  static httpInstance:httpRequest;

  static getInstance() {
    if(!this.httpInstance){
      this.httpInstance = new httpRequest();
    }
    return this.httpInstance;
  }

  baseOptions(params:Options ) {
    let { url, data, method } = params;
    const BASE_URL = getBaseUrl();
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    method = method;
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'Authorization': Taro.getStorageSync('Authorization')
      }
    };
    // console.log(Taro.request(option));
    return Taro.request(option);
  }

  get(url:string, data:Datas) {
    let option = {
      url,
      data,
      method: 'GET' as Methohs
    };
    return this.baseOptions(option);
  }

  post(url:string, data:Datas, contentType?:string) {
    let params = { url, data, contentType, method: "POST" as Methohs };
    return this.baseOptions(params);
  }

  // put(url, data = "") {
  //   let option = { url, data };
  //   return this.baseOptions(option, "PUT");
  // }

  // delete(url, data = "") {
  //   let option = { url, data };
  //   return this.baseOptions(option, "DELETE");
  // }

}

export default httpRequest.getInstance();
