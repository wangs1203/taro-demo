
import Taro from '@tarojs/taro';
import { Model } from "dva-core";
export default {
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
      : '',
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
} as Model;
