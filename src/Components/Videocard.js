import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapi';
import uniqid from 'uniqid';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

function Videocard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true)
    //body
   
    //id
    var id=uniqid()
    // video_title
    var video_title=video.caption
    //video url
    var url=video.video_url
    //date


     var date=format(new Date(),"yyyy-MM-dd h:mm:ss ")
// console.log(Date);

const  body={id,video_title,url,date}
if(body){
    //api calling
const result=await addHistory(body)
console.log(result);


  }   
    };

    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if(result.status>=200 && result.status<300){
      deleteFunc(result.data)
      }
    }
 const dargStart=(e,id)=>{
  console.log(" card dargging started    soucre"+id);
 
 //storedata

 e.dataTransfer.setData("cardId",id)
 }

    
  return (
    <div>
    
      <Card draggable onDragStart={(e)=>dargStart(e ,video.id)} className='mb-3' style={{ width: '18rem' }}>
    <Card.Img onClick={handleShow} style={{height:'200px',width:'100%'}} variant="top" src={video.cover_image} />
    <Card.Body>
      <Card.Title>{video.caption}</Card.Title>
      <Card.Text>
     
      </Card.Text>
     <Trash2 onClick={()=>handleDelete(video.id)} size={70} className='text-danger btn' ></Trash2>
    </Card.Body>
  </Card>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src={video.video_url} title="Bang Bang Title Track Full Video | BANG BANG|Hrithik Roshan Katrina Kaif |Vishal Shekhar,Benny,Neeti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
  </div>
  )
}


export default Videocard