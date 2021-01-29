import dva from 'dva'
import { createBrowserHistory } from 'history'
import route from '../router/index'

interface basicObject {
  [propName: string]: any;
}

interface dvaOptions {
  models?: basicObject;
  [propName: string]: any;
}

export const createApp = ((): Function => {
  let app: any;
  return (opt: dvaOptions = {}) => {
    if (app) return false

    app = dva({
      ...opt,
      history: createBrowserHistory()
    })

    opt.models && opt.models.forEach((model: basicObject) => app.model(model))

    app.router(route)
    app.start('#root')

    return app
  }
})()