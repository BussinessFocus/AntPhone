/*
 * @Author: 王新
 * @Date: 2020-02-05 11:38:05
 * @Description: 封装路由懒加载文件
 */
import React from 'react';
import Loadable from 'react-loadable'

const LoadingComponent = () => {
    return  (
        <div></div>
    )
}

export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}