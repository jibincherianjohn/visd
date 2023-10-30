import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import { addCategory, deleteCat, getAllCat } from '../services/allapis';
import { Trash } from 'react-feather';
function Catogories() {

  //state to hold input id and video array

  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: []
  })

  const [categories, setCategories] = useState({})

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })
  }

  const addData = async () => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })

    const { name } = catInputs
    if (name == "") {
      toast.error("Please provide category name", {
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
    else {
      //api call
      const result = await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false)

        getAllCategories()

        toast.success(`${result.data.name} Added`, {
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

  //console.log(catInputs);

  const getAllCategories = async () => {
    const result = await getAllCat()
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data)
    }
  }
  console.log(categories);

  useEffect(() => {
    getAllCategories()
  }, [])


  const removeCategory=async(id)=>{
    const result=await deleteCat(id)
    if(result.status>=200 && result.status<300){
    //refresh category list
    getAllCategories()
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button>
      {
        categories.length>0?(
          categories.map(i=>(
            <div className='mt-3 ms-5 p-3 border border-danger fw-bold 'style={{height:'120px'}}>
              <p className='fs-3'>{i.name}</p>
             <div className='text-center '>
              <Trash onClick={()=>removeCategory(i.id)} size={70} className='text-danger btn' ></Trash>
             </div>
            </div>
          ))
        ): <h1>No Categories added yet</h1>
      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={(e) => setInputs(e)} type="text" name="name" placeholder="" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>

        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Catogories