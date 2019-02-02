import * as constans from './constans'
import service from '../../api/service'

const resetEnterTable = (data)=>({
    type:constans.GET_ENTER_TABLE,
    value:data
})
export const getEnterTable = ()=>{
    return (dispatch)=>{
        let array = [];
        service.requiregetemployee().then(data=>{
            if(data&&data.ERRORNO>=0&&data.GRID0.length>1){
                data.GRID0.shift();
                let ln = data.GRID0.length;
                for(let i=0;i<ln;i++){
                    let oData = data.GRID0[i].split('|')
                    array.push({
                        key:i,
                        id:oData[0],
                        name:oData[1],
                        level:oData[3],
                        phonenumber:oData[2],
                        email:oData[4],
                        address:oData[5],
                        entrytime:oData[6],
                    })
                }
                dispatch(resetEnterTable(array))
            }
        })
    }
}

