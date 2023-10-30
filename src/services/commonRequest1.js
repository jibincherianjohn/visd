import axios from "axios";

export const commonRequest=async(method,url,body)=>{
    let config={
        method,       //method:method==method,
        url,
        data:body
    }
    return await axios(config).then(result=>{
        return result
    }).catch(err=>{
        return err
    })
    
}