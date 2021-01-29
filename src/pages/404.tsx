/*
 * @Author: kim
 * @Date: 2021-01-28 18:29:50
 * @LastEditors: kim
 * @LastEditTime: 2021-01-28 18:35:09
 * @Description: 404页面
 */
import React from 'react'
import { Link } from 'react-router-dom'

const NoFoundPage = () => {
  return <div>
    <div>
      <h1>404</h1>
      <Link to='/'>
        <button>回到主页</button>
      </Link>
    </div>
  </div>
}

export default NoFoundPage