import { baseUrl } from "./base_url";
import { commonRequest } from "./commonRequest";



//add videos

export const addVideo=async(body)=>{
return await commonRequest('POST',`${baseUrl}/videos`,body)

}


//get all videos

export const getAllVideo=async()=>{
    return await  commonRequest('GET',`${baseUrl}/videos`,{})
  }

//delete single videos
export const deleteVideo=async(id)=>{
    return await  commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
  }

// add category

export const addCategory=async(body)=>{


  return await commonRequest('POST',`${baseUrl}/categories`,body)

}

//getall category

export const getAllCat=async()=>{


  return await commonRequest('GET',`${baseUrl}/categories`,{})

}



// get categery by id

export const getCatId=async(id)=>{


  return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})

}



// category delete  

export const deleteCat=async(id)=>{


  return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})

}
// add histoty

export const addHistory=async(body)=>{


  return await commonRequest('POST',`${baseUrl}/histories`,body)

}

// getallhistory

export const getAllHistory=async(body)=>{


  return await commonRequest('GET',`${baseUrl}/histories`,{})

}
// delete history
export const deleteHistory=async(id)=>{


  return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})

}

//darg and drop


//acess single video
export const getVideo=async(id)=>{
  return await  commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

// update category

export const updateCategory=async(id,body)=>{


  return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)

}