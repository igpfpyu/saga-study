import Environment from '../environment/Environment';
export default ()=>{
    const host=Environment.host()+ "user";
    return fetch(host,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({a:2,b:3}),
    }).then(response=>{
        console.log(response);
        return response.json();
    }).then(resJSON=>{
        console.log(resJSON);
        return resJSON
        // return "abc"
    }).catch(e=>console.log(e));
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
