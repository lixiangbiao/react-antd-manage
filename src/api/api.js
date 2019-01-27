import axios from 'axios';
import qs from 'qs'
export const getData = params => {
    params.Reqno = new Date().getTime();
    return axios.post('/reqxml',qs.stringify(params)).then(
        res => {
            if(res.data.ERRORNO<0){
                return res.data;
            }else{
                return res.data;
            }
        }
    ).catch(error => error+qs.stringify(params));
};

