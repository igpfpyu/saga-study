import Environment from '../environment/Environment';
// export default (params)=>{
//     const host=Environment.host()+ "user";
//     return fetch(host,{
//         method:"POST",
//         headers:{
//             "Content-type":"application/json",
//         },
//         body:JSON.stringify(params),
//     }).then(response=>{
//         console.log(response);
//         return response.json();
//     }).then(resJSON=>{
//         console.log(JSON.stringify(resJSON));
//         console.log('=================resJSON=================')
//         return Promise.resolve(resJSON);
//         // return Promise.resolve(JSON.stringify(resJSON));
//         // return "abc"
//     }).catch(err=>{
//         console.log(JSON.stringify(err))
//         return err;
//     });
// }
export default {
    postNetwork:(params)=>{
        function _fetch(fetch){
            return Promise.race([
                fetch,
                new Promise((resolve, reject)=>{
                    setTimeout(() => reject(new Error('网络请求超时，请稍后再试')), 60000);//60秒超时
                })
            ])
        }
        const host=Environment.host()+ "user";
        return _fetch(fetch(host,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "credentials": 'include'
            },
            body:JSON.stringify(params),
        }).then(response=>{
            console.log(response);
            if(response.ok){
                return response.json();
            }else{
                return null;
            }
        }).then(resJSON=>{
            console.log(JSON.stringify(resJSON));
            console.log('=================resJSON=================')
            return Promise.resolve(resJSON);
            // return Promise.resolve(JSON.stringify(resJSON))   使用saga时，这里不能返回字符串；
        }).catch(err=>{
            console.log(JSON.stringify(err))
            return Promise.reject(err);
        }));
    }
}
//export default {
//    postNetwork:(TransCode)=>{
//        return "abc";
        // const host=Environment.host()+ TransCode;
        // console.log(host);
        // return fetch(host)
        //     .then(res => (
        //         res.json()
        //     ))
        //     .then(resJson => Promise.resolve(JSON.stringify(resJson)))
        //     .catch(err => (
        //         err.message
        //     ))
            // .done()
        // return fetch(host,{
        //     method:"POST",
        //     // credentials:"include",
        //     // headers:{
        //     //     "Accpt":"application/json",
        //     //     "Content-type":"multipart/form-data",
        //     // },
        //     // body:JSON.stringify(params)
        // }).then(response=>{
        //     console.log(JSON.stringify(response));
        //     console.log('=============response=========')
        //     // if(response.ok){
        //         return response.json();
        //     // }else{
        //     //     console.log(response);
        //     //     return null;
        //     // }
        // }).then(res=>{
        //     console.log(JSON.stringify(res));
        //     console.log('===========res=======')
        //     return res;
        //     // return Promise.resolve(JSON.stringify(res));
        // }).catch(error=>{
        //     console.log(error);
        // })
//    }

//}
