import {
  create, DvaInstance, DvaStore
} from 'dva-core';
import { Dispatch } from 'redux';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app: DvaInstance;
let store: DvaStore;
let dispatch: Dispatch;
let registered;

function createApp(opt:any) {
  // redux 的日志
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!registered) {
    opt.models.forEach((model) => app.model(model));
  }
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.log(err);
    }
  });

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
