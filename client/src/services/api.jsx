import axios from "axios"
import { API_NOTIFICATION_MESSAGE } from "../constants/config"

//axios intercepts , common api
const API_URL="http://localhost:4000"

const axiosInstance=axios.create(
    {
        baseURL:API_URL,
        timeout:10000,
        headers:{
            "Content-Type":"application/json"
        }
    }
)
axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)
axiosInstance.interceptors.response.use(
    function(response){
        //loader stop
        return processResponse(response)

    },
    function(error){
        //stop loader
        return Promise.reject(processError(error))
    }
)


/////////////

// if success return isSuccesss true , data:object

//if failure return isFailure true , status:string, code:int, msg:string

const processResponse=(response)=>{
    if(response?.status==200){
        return {isSuccess:true, data:response.data}
    }
    else{
        return {
            isFailure:true,
            status:response?.status,
            msg:response?.status,
            code:response?.code
        
        }
    }
}

const processError=(error)=>{
    if(error.response){
        // request chala gya hai pr maybe 500 error mtlab database mein store problem
        //request made and server responded with other status code except 2.x.x(200 to 299)
        //that fails out of the range 2.x.x

    }
    else if(error.request){
        // network issue , agar frontend se backend connect nhi hua ..etc
        //request made but no response was received

    }
    else{
        //Something happend in setting up request that triggers an error

    }
}
