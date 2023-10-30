import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";

//add video
 export const addVideo=async(body)=>{
  return await  commonRequest('POST',`${baseUrl}/videos`,body)
}

//get all videos
export const getAllVideo=async()=>{
  return await  commonRequest('GET',`${baseUrl}/videos`,{})
}
//delete single video
export const deleteVideo=async(id)=>{
  return await  commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}
//add category

//get all categories

//delete category

//drag and drop 