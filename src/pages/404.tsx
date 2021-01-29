/*
 * @Author: kim
 * @Date: 2021-01-28 18:29:50
 * @LastEditors: kim
 * @LastEditTime: 2021-01-29 15:49:39
 * @Description: 404页面
 */
import React from 'react'
import { Link } from 'react-router-dom'
import noFoundImg from '../assets/images/404.png'
import './style.scss'

const NoFoundPage = () => {
  return (
    <div className='no-found-page'>
      <div className='no-block'>
        <img className='no-image' src={noFoundImg} alt="" />
        <h1 className='no-title'>Sorry, the page you visited does not exist.</h1>
        <Link to='/'>
          <button className='no-back_btn'>Back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default NoFoundPage