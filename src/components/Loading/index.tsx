/*
 * @Author: kim
 * @Date: 2021-01-29 10:55:13
 * @LastEditors: kim
 * @LastEditTime: 2021-02-04 17:30:49
 * @Description: loading
 */
import React from 'react'
import style from './style.scss'

const Loading = () => {
  return (
    <div className={style['loading-page']}>
      <div className={style['loading-block']}>
        <div className={style['loading-spinner']}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  )
}

export default Loading
