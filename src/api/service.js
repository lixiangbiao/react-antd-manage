import {getData} from './api'

class service {
    requireLogin(obj) {
        obj = obj || {};
        obj.action = 'login';
        return new Promise((resolve, reject) => {
            getData(obj)
                .then((data) => { // 从封装体中解构出data字段
                    resolve(data);
                })
        })
    }

    requiregetUser(obj) {
        obj = obj || {};
        obj.action = 'getuser';
        return new Promise((resolve, reject) => {
            getData(obj)
                .then((data) => { // 从封装体中解构出data字段
                    resolve(data);
                })
        })
    }

    requiresetemployee(obj) {
        obj = obj || {};
        obj.action = 'setemployee';
        return new Promise((resolve, reject) => {
            getData(obj)
                .then((data) => { // 从封装体中解构出data字段
                    resolve(data);
                })
        })
    }

    requiregetemployee(obj) {
        obj = obj || {};
        obj.action = 'getemployee';
        return new Promise((resolve, reject) => {
            getData(obj)
                .then((data) => { // 从封装体中解构出data字段
                    resolve(data);
                })
        })
    }
}

// 实例化后再导出
export default new service()
