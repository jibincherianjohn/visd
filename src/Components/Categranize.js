import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addCategory, getVideo, updateCategory } from '../services/allapi';
import { deleteCat, getAllCat } from '../services/allapi';
import { Trash } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import { id } from 'date-fns/locale';
import { Link } from 'react-router-dom';
function Categranize() {

//state to hold input id and video array 


const[catInputs,setCatInputs]=useState({

  id:"" ,
  name: "",
  videos: []



})

const [categories,setCategories]=useState ({})


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setInputs=(e)=>{

  const {value,name}=e.target

  setCatInputs({...catInputs,[name]:value})

    }
    console.log(setInputs);


    const addData=async()=>{
    let id=uniqid()
    setCatInputs({...catInputs,["id"]:id})
    console.log(addData);

const  {name}=catInputs
if(name==""){
  toast.error("please provide caption", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}


//apicall
else{
 const result= await addCategory(catInputs)
 if(result.status>=200&& result.status<300)
 {
  setShow(false);


  getALLCategories()


  toast.success(`${result.data.name}added`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
 }
}
    }
const getALLCategories = async() =>{
  const result=await getAllCat()
if(result.status>=200&& result.status<300){
  
  setCategories(result.data);
}
}
console.log(categories);

useEffect(()=>{
  getALLCategories()
},[])

const removCategory=async(id)=>{

  const result= await deleteCat(id)
  if(result.status>=200&& result .status<300){
        //refresh category list
    getALLCategories()
  }
}

const dargOver=(e)=>{

  e.preventDefault()
  console.log("darg over   category");
  
}

const dropped=async(e,id)=>{


  console.log("droped card id"+id);

  //video id acess
const videoId=e.dataTransfer.getData('cardId')
console.log(videoId);

 //acces video from backend
 const {data}= await getVideo(videoId)
 console.log(data);

//select dropp  category

const selectedcategory=categories.find(i=>i.id==id)
console.log(selectedcategory);

//update category object with video data
selectedcategory.videos.push(data)
console.log(selectedcategory);

//api call to update change in backend

await updateCategory(id,selectedcategory)

getALLCategories()

}


  return (
    <div>
        
        <Button variant="primary" onClick={handleShow}> ADD category
  
  </Button>
  {
       categories.length > 0?(
       categories.map(i=>(
       
          <div droppable 
          onDragOver={(e)=>dargOver(e)}
          onDrop={(e)=>dropped(e,i?.id)}
          
          className='border mt-3  ms-4 p-3'>
            
            <Link to={`/display/${i.id}`} style={{textDecoration:'none'}}>
            <p className='fs-3'> {i.name} </p>
            </Link>
              <div className='Text-end'>
              
              <Trash onClick={()=>removCategory(i.id)} size={55} className='text-danger btn'></Trash>
             
            </div>
           
          {
  
           i.videos.map(j=>(
            
     <img style={{height:'70px', width:'70px', padding:'5px'}}   src={j.cover_image} alt="" />
  
  
           ))
  
  
          }
          </div>
       
        

       ))


       ) :<h3> No category added yet</h3>




      }
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> <h3>New cattegory</h3></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="categarnxis"
        className="mb-3 mt-5 text-dark"
      >
        <Form.Control type="text" onChange={(e)=>setInputs(e) } name='name'  />
      </FloatingLabel></Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={addData}>
       ADD
      </Button>
  
    </Modal.Footer>
  </Modal>
  <ToastContainer />
  </div>
  )
  }

export default Categranize