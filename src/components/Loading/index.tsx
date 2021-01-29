/*
 * @Author: kim
 * @Date: 2021-01-29 10:55:13
 * @LastEditors: kim
 * @LastEditTime: 2021-01-29 16:38:53
 * @Description: loading
 */
import React from 'react'
import './style.scss'

const Loading = () => {
  return (
    <div className="loading-page">
      <div className="loading-block">
        <div className="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Loading