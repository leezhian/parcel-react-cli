/*
 * @Author: kim
 * @Date: 2021-01-28 18:29:50
 * @LastEditors: kim
 * @LastEditTime: 2021-02-04 16:19:41
 * @Description: 404页面
 */
import React from 'react'
import { Link } from 'dva/router'
import noFoundImg from '../assets/images/404.png'
import style from './style.scss'

const NoFoundPage = () => {
  return (
    <div className={style['no-found-page']}>
      <div className={style['no-block']}>
        <img className={style['no-image']} src={noFoundImg} alt="" />
        <h1 className={style['no-title']}>Sorry, the page you visited does not exist.</h1>
        <Link to='/'><button className={style['no-back_btn']}>Back Home</button></Link>
      </div>
    </div>
  )
}

export default NoFoundPage