import * as constans from './constans'
import service from '../../api/service'
import { message } from 'antd';
const changeLogin = (value)=>({
    type:constans.LOGIN_STATUS,
    value:value
})
export const login = (obj)=>{
    return (dispatch)=>{
        service.requireLogin(obj).then(data=>{
            if(data.ERRORNO>=0){
                message.success('登陆成功');
                dispatch(changeLogin({status:true,name:data.username})) 
            }else{
                message.error('登陆失败');
                dispatch(changeLogin({status:false,name:null})) 
            }
        })
    }   
}

