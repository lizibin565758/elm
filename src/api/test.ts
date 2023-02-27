/**
 * @FileDescription: api请求测试
 *
 * @Author: Lizb
 * @Date: 2023-02-27 14:25:25
 */
import axios from './base'

export const fetchTest = () => {
    return axios.get('test')
}