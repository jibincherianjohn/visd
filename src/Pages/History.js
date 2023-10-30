import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapi';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
function History() {


 const [histories,setHistories]=useState([])

const getHistories=async()=>{
const {data}=await getAllHistory()
console.log(data);
setHistories(data)
}

const removeItem=async(id)=>{
  await deleteHistory(id)
  getHistories()
}

useEffect(()=>{

    getHistories()
},[])

console.log(histories);
  return (
    <div>
        <h1 className='text-center p-5'>Watch History</h1>
        <Link to={'/view'}>
         <button className='btn btn-rounded warning' >Go back</button>
        </Link>
       {  histories.length>0?(<Table striped bordered hover size="sm"  variant='info' className='w-75 container mt-3 pb-5 mb-5'>
      <thead className='text-center fs-5'>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Video Url</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      
      { histories?.map((i,index)=>(

       <tr>
          <td>{index + 1}</td>
          <td>{i?.date}</td>
          <td>{i?.video_title}</td>
          <td>{i?.url}</td>
          <td className='text-center'>
           <Trash onClick={()=>removeItem(i?.id)} size={50} className='btn text-white'></Trash>
          </td>
        </tr>
         ))
        }
       
      </tbody>
    </Table>) : <h1> no History founded</h1>
    }
    </div>
  )
}

export default History