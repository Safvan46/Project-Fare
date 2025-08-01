import axios from "axios";


const commonApi=async(reqUrl,reqMethod,reqHeader,reqBody)=>{
    const config={
        url:reqUrl,
        method:reqMethod,
        headers:reqHeader?reqHeader:"Content-type:application/json",
        data:reqBody
    }
    return  await axios(config)
}

export default commonApi