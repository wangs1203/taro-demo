/**
 * 添加taro等自定义类型
 */

import Taro from '@tarojs/taro';

// 在Component上定义自定义方法类型
declare module '@tarojs/taro' {
  const globalSystemInfo: any;

  interface Component {
    // $api: any;
  }
}
