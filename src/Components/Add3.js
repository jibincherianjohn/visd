import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({update}) {

  //state to hold input datas
  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    cover_image: "",
    video_url: ""
  })
  //function for onChange()
  const setValues = (e) => {
    // let value=e.target.value
    // let name=e.target.value 
    //above two lines of can be destructured as given below
    let { value, name } = e.target
    // console.log(value,name);

    setInputs({ ...inputs, [name]: value })

  }
  // console.log(inputs);

  //function to extract video url
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    // console.log(videoUrl);
    if (videoUrl.includes("v=")) {
      let subUrl = videoUrl.split("v=")[1]
      //console.log(subUrl);
      let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
      setInputs({ ...inputs, ["video_url"]: finalUrl })
    }
  }
  // console.log(inputs);

  //function for add button
  const addHandle = async () => {
    let id = uniqid()
    // console.log(id);
    setInputs({ ...inputs, ["id"]: id })

    const { caption, cover_image, video_url } = inputs

    if (caption == "" || cover_image == "" || video_url == "") {
      toast.error("All fields are required", {
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
      const result = await addVideo(inputs)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        
       //update state of home
       
        update(result.data)
        
        toast.success("Video added", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShow(false)
      }
  }
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='me-5'>
      <Button variant="primary" onClick={handleShow}>
        <i onClick={handleShow} class="fa-solid fa-upload fa-bounce fa-lg"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control name='caption' onChange={(e) => setValues(e)} type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Cover Image URL" className='mb-3'>
            <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput2" label="YouTube Video URL">
            <Form.Control onChange={(e) => extractUrl(e)} type="text" placeholder="" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
  }


export default Add