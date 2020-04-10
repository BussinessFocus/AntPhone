/*
 * @Author: 文件作者
 * @Date: 文件创建日期
 * @Description: 文件描述
 */
import loadable from '../common/loadable'
const erWeiMa = loadable(() => import('../pages/ErWeiMa'))
const router = [
    {path: "/erWeiMa/:doctorName/:doctorTitle/:doctorHospital/:doctorDepartment/:doctorImg/:doctorId", component: erWeiMa},
]

export default router