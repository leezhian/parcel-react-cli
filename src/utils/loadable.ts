import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../components/Loading/index'

export default (loader: any, loading = Loading, delay: number = 300) => {
  return Loadable({
    loader,
    loading,
    delay
  })
}
