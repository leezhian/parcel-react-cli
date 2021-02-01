/*
 * @Author: kim
 * @Date: 2021-01-28 17:31:22
 * @LastEditors: kim
 * @LastEditTime: 2021-02-01 10:44:28
 * @Description: 路由配置文件
 */
import Loadable from '../utils/loadable'

const routes: Array<any> = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: Loadable(() => import('../pages/HelloWorld'))
  },
  {
    name: '404',
    path: '/404',
    component: Loadable(() => import('../pages/404'))
  }
]

export default routes