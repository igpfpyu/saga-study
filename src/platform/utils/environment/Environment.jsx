const environment="ft";
export default {
    host:function(){
        if(environment==='ft'){
            return window.location.href;
        }else if(environment==="sit"){
            return "";
        }else if(environment==="uat"){
            return "";
        }else if(environment==="online"){
            return "";
        }

    }
}
