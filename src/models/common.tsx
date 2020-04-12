
import Taro from '@tarojs/taro';
import { Model } from 'dva-core';
import modelExtend from 'dva-model-extend';
import { model } from 'utils/model';

export default modelExtend(model,
  {
    namespace: 'common',
    state: {
      access_token: Taro.getStorageSync('access_token'),
      mobile: Taro.getStorageSync('user_info')
        ? Taro.getStorageSync('user_info').mobile
        : '',
      nickname: Taro.getStorageSync('user_info')
        ? Taro.getStorageSync('user_info').nickname
        : '',
      new_user: Taro.getStorageSync('user_info')
        ? Taro.getStorageSync('user_info').new_user
        : '',
      erroMessage: Taro.getStorageSync('user_info')
        ? Taro.getStorageSync('user_info').erroMessage
        : ''
    },
    effects: {}
  }) as Model;
