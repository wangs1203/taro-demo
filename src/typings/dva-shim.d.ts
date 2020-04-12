// /<reference types="redux" />
declare module 'dva-core' {
  import {
    Reducer,
    AnyAction,
    ReducersMapObject,
    Dispatch,
    MiddlewareAPI,
    StoreEnhancer,
    Store
  } from 'redux';

  export interface onActionFunc {
    (api: MiddlewareAPI<any>): void;
  }

  export interface ReducerEnhancer {
    (reducer: Reducer<any>): void;
  }

  export interface Hooks {
    onError?: (e: Error, dispatch: Dispatch<any>) => void;
    onAction?: onActionFunc | onActionFunc[];
    onStateChange?: () => void;
    onReducer?: ReducerEnhancer;
    onEffect?: () => void;
    onHmr?: () => void;
    extraReducers?: ReducersMapObject;
    extraEnhancers?: StoreEnhancer<any>[];
  }

  export type HooksAndOpts = Hooks & {
    initialState?: Record<string, any>
  }

  export interface CreateOpts {
    initialState?: Record<string, any>;
    setupApp?: Function;
  }

  export interface EffectsCommandMap {
    put: <A extends AnyAction>(action: A) => any;
    call: Function;
    select: Function;
    take: Function;
    cancel: Function;
    [key: string]: any;
  }

  export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;
  export type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
  export type EffectWithType = [Effect, { type: EffectType }];
  export type Subscription = (api: SubscriptionAPI, done: Function) => void;
  export type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];

  export interface EffectsMapObject {
    [key: string]: Effect | EffectWithType;
  }
  // 使用redux-v4.x的ReducerMapObject会导致dva reducer中的action payload等参数无法确定类型（dva中使用的是3.x的redux）
  // 这里从redux v3.x中找到了对应的ReducersMapObject以解决上述问题
  export interface ReduxV3ReducersMapObject {
    [key: string]: Reducer<any>;
  }
  export interface SubscriptionAPI {
    history: History;
    dispatch: Dispatch<any>;
  }

  export interface SubscriptionsMapObject {
    [key: string]: Subscription;
  }

  export interface Model {
    namespace: string;
    state?: any;
    reducers?: ReduxV3ReducersMapObject | ReducersMapObjectWithEnhancer;
    // reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer,
    effects?: EffectsMapObject;
    subscriptions?: SubscriptionsMapObject;
  }

  export interface DvaStore extends Store<any> {
    runSaga: (saga: any) => any;
  }

  export interface DvaInstance {
    /**
     * Register an object of hooks on the application.
     *
     * @param hooks
     */
    use: (hooks: Hooks) => void;

    /**
     * Register a model.
     *
     * @param model
     */
    model: (model: Model) => void;
    start: () => any;
    getStore: () => DvaStore;
    dispatch: Dispatch<any>;
    _models: any;
    _plugins: Plugin;
    _store: DvaStore;
  }

  export function create (hooksAndOpts?: HooksAndOpts, createOpts?: CreateOpts): DvaInstance;
}
