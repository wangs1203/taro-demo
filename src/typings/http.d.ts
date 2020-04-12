declare namespace API {

  export type Methods = 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

  export interface Headers { [key: string]: string }

  export interface Options {
    url: string;
    host?: string;
    method?: Methods;
    data?: any;
    header?: Headers;
  }

  export interface Response {
    data: any;
    errMsg: string;
    statusCode: number;
    header: Headers;
    cookies: Array<{
      name: string,
      value: string,
      expires: string,
      path: string
    }>;
  }

  export interface Result {
    isOk: boolean;
    errMsg?: string;
    code?: number;
    result?: {[key: string]: any};
  }
}
