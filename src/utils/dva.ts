import Taro from '@tarojs/taro';
import { create, DvaInstance, DvaStore } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app: DvaInstance;
let store: DvaStore;
let dispatch;

function createApp(opt) {
  // redux日志
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  // 适配支付宝小程序
  if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
    global = {} as any;
  }

  if (!global['registered']) opt.models.forEach(model => app.model(model));
  global['registered'] = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
