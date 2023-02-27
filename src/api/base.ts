/**
 * @FileDescription: 封装axios
 *
 * @Author: Lizb
 * @Date: 2023-02-27 14:25:05
 */
import axios from 'axios'
import { Dialog } from "vant";

const request = axios.create({
    baseURL: '/api',
})

// 拦截器
request.interceptors.response.use(response => {
    const { data: _data } = response
    const { data, code, msg } = _data
    if (code !== 0) {
        Dialog.alert({
            message: msg
        }).then(() => {
            // 关闭弹窗的逻辑
        })
        return Promise.reject(msg)
    }
    return data
})

export default request