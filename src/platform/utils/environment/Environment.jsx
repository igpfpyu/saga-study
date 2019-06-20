const environment="ft";
export default {
    host(){
        if(environment==='ft'){
            return "http://localhost:3000/";
        }else if(environment==="sit"){
            return "";
        }else if(environment==="uat"){
            return "";
        }else if(environment==="online"){
            return "";
        }

    }
}
