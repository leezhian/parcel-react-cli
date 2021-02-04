import dva, { Effect, Reducer } from 'dva'
import { createBrowserHistory } from 'history'
import route from '../router/index'

interface basicObject {
  [propName: string]: any;
}

interface modelType {
  namespace: string;
  state: basicObject;
  effects?: {
    [propName: string]: Effect;
  };
  reducers?: {
    [propName: string]: Reducer<basicObject>;
  };
}

interface dvaOptions {
  models?: Array<modelType>;
  [propName: string]: any;
}

export const createApp = ((): Function => {
  let app: any
  return (opt: dvaOptions = {}) => {
    if (app) return false

    app = dva({
      ...opt,
      history: createBrowserHistory(),
    })

    opt.models && (opt.models.forEach((model: modelType) => app.model(model)))

    app.router(route)
    app.start('#root')

    return app
  }
})()
