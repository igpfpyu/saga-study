import Environment from '../environment/Environment';
export default {
    postNetwork:(TransCode, params, isProgress=false)=>{
        const host=Environment.host()+ TransCode;
        //超时

        function _fetch(fetch){
            return Promise.race([
                fetch,
                new Promise(function(resolve, reject){
                    setTimeout(()=>reject(new Error('请求超时，请稍后再试')), 400000);
                })
            ])
        }
        return _fetch(fetch(host,{
            method:"POST",
            credentials:"include",
            headers:{
                "Accpt":"application/json",
                "Content-type":"multipart/form-data",
            },
            body:JSON.stringify(params)
        })).then(response=>{
            console.log(JSON.stringify(response));
            console.log('=============response=========')
            if(response.ok){
                return response.json();
            }else{
                console.log(response);
                return null;
            }
        }).then(res=>{
            console.log(JSON.stringify(res));
            console.log('===========res=======')
            return Promise.resolve(res);
        }).catch(error=>{
            console.log(error);
        });
    }

}
