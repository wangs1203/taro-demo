import { Model } from "dva-core";
import {loginStatus} from '../../servers/api';

export default {
  namespace: 'demo',
  state: {
    count: 0
  },
  effects: {
    *queryLoginStatus(_,{put,call}) {
      // console.log(arguments);
      const res = yield call(loginStatus,{});
      console.log(res);
    },

    *save({ payload: todo }, { put, call }) {
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
      yield call(()=> new Promise((resolve) => setTimeout(resolve, 1000)), todo);
      yield put({ type: 'add', payload: todo });
    },
  },
  reducers: {
    add (state, { payload }) {
      console.log(arguments)
      return {...state,count: ++state.count }
    },
    minus (state) {
      return {...state,count: --state.count }
    },
  },

} as Model;
