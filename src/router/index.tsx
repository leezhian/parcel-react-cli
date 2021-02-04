/*
 * @Author: kim
 * @Date: 2021-01-28 17:21:02
 * @LastEditors: kim
 * @LastEditTime: 2021-02-04 18:16:43
 * @Description: 路由
 */
import React, { useMemo } from 'react'
import { Route, Switch, Redirect, Router } from 'dva/router'
import routes from './route.config';

interface routeObj {
  name: string;
  path?: string;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
  children?: routeObj;
  [propName: string]: any;
}

/**
 * @description: 修改路由配置
 * @param {basicObject} route 路由对象
 * @param {string} basePath 父路由地址
 * @return {array} 路由数组
 */
const compileRoute = (route: routeObj, basePath?: string): Array<routeObj> => {
  const newRoute = { ...route }
  delete newRoute.children
  // newRoute.component &&
  // typeof newRoute.component === 'string'
  // && (newRoute.component = Loadable(() => import(newRoute.component)))
  basePath && (newRoute.path = `${basePath + newRoute.path}`)
  let routeArr = [newRoute]

  if (route.children) {
    route.children.forEach((child: routeObj) => {
      routeArr = routeArr.concat(compileRoute(child, route.path))
    })
  }

  return routeArr
}

const RouteMap = (props: any) => {
  const { history } = props
  /**
   * @description: 生成路由配置
   */
  const routeList = useMemo(() => {
    let routeArr: Array<any> = []
    routes.forEach(p => {
      routeArr = routeArr.concat(compileRoute(p))
    })

    return routeArr
  }, [routes])

  return (
    <Router history={history}>
      <Switch>
        {
          routeList.map((item, key) => (
            <Route
              key={key.toString()}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))
        }
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default RouteMap
