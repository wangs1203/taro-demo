import modelExtend from 'dva-model-extend';
import { Model } from 'dva-core';
import { model } from 'utils/model';
import { getDemo } from './service';

export const enum EffectType {
  asyncDemo = 'demo/asyncDemo',
  add = 'demo/add',
  minus = 'demo/minus',
  queryDemo = 'demo/queryDemo',
}
export default modelExtend(model, {
  namespace: 'demo',
  state: {
    count: 0
  },
  effects: {
    * queryDemo(_, { put, call }) {
      // console.log(arguments);
      const res = yield call(getDemo);
      console.log(res);
    },

    * asyncDemo({ payload: todo }, { put, call }) {
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
      yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)), todo);
      yield put({ type: 'add', payload: todo });
    }
  },
  reducers: {
    add(state, { payload }) {
      // console.log(arguments);
      return { ...state, count: ++state.count };
    },
    minus(state) {
      return { ...state, count: --state.count };
    }
  }
}) as Model;
