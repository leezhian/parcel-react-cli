/*
 * @Author: kim
 * @Date: 2021-01-28 17:31:22
 * @LastEditors: kim
 * @LastEditTime: 2021-01-29 16:39:34
 * @Description: 路由配置文件
 */
import Loadable from '../utils/loadable'

const routes: Array<any> = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: Loadable(() => import('../pages/Home'))
  },
  {
    name: '404',
    path: '/404',
    component: Loadable(() => import('../pages/404'))
  }
]

export default routes