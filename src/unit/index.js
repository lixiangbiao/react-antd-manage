export const compareArray = (arr1,arr2)=>{
    if(arr1===arr2){//如果2个数组对应的指针相同，那么肯定相等，同时也对比一下类型
        return true;
    }else{
        if(arr1.length!==arr2.length){
            return false;
        }else{//长度相同
            for(let i in arr1){//循环遍历对比每个位置的元素
                if(arr1[i]!==arr2[i]){//只要出现一次不相等，那么2个数组就不相等
                    return false;
                }
            }//for循环完成，没有出现不相等的情况，那么2个数组相等
            return true;
        }
    }
}

export const routerName = (pathname)=>{
    const first = {
        '/':'首页',
        'home':'首页',
        'storage':'仓库管理',
        'product':'产品管理',
        'order':'订单管理',
        'customer':'客户管理',
        'employee':'员工管理',
        'set':'系统设置'
    }
    const second={
        'enter':'入库单',
        'cut':'出库单',
        'division':'库存分配',
        'balance':'库存余额',
        'depository':'产品库存',
        'cost':'产品成本',
        'plist':'产品列表',
        'statement':'订单报表',
        'olist':'订单列表',
        'attach':'订单归属',
        'cmessage':'客户信息',
        'market':'客户销售',
        'order':'客户订单',
        'relation':'客户关系',
        'message':'员工信息',
        'jurisdiction':'员工权限',
        'newadd':'新员工入职',
        'performance':'员工销售业绩',
    }
    let routername = []
    let path = []
    if(pathname === '/'){
        path = ['/']
    }else{
        path = pathname.split('/');
        if(path.length !==1){path.shift()};
    }
    
    path.map((value,index)=>{
        if(index === 0){
            routername.push(first[value])
        }
        if(index === 1){
            routername.push(second[value])
        }
        return true;
    })
    return routername
}

export const routerTitle = (pathname)=>{
    const first = {
        '/':'首页',
        'home':'首页',
        'storage':'仓库管理',
        'product':'产品管理',
        'order':'订单管理',
        'customer':'客户管理',
        'employee':'员工管理',
        'set':'系统设置'
    }
    const second={
        'enter':'入库单',
        'cut':'出库单',
        'division':'库存分配',
        'balance':'库存余额',
        'depository':'产品库存',
        'cost':'产品成本',
        'plist':'产品列表',
        'statement':'订单报表',
        'olist':'订单列表',
        'attach':'订单归属',
        'cmessage':'客户信息',
        'market':'客户销售',
        'order':'客户订单',
        'relation':'客户关系',
        'message':'员工信息',
        'jurisdiction':'员工权限',
        'newadd':'新员工入职',
        'performance':'员工销售业绩',
    }
    let path = []
    if(pathname === '/'){
        path = ['/']
    }else{
        path = pathname.split('/');
        path.shift();
    }

    if(path.length ===1){
        return first[path[path.length - 1]]
    }else{
        return second[path[[path.length - 1]]]
    }
    
}