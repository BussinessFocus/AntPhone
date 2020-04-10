/*
 * @Author: 文件作者
 * @Date: 文件创建日期
 * @Description: 文件描述
 */

import loadable from '../common/loadable'
const page1 = loadable(() => import('../pages/page1.jsx'))

const router = [
    {path: "/page1", component: page1},
]

export default router