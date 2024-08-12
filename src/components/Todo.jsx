import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// import List from './List'
import CreateTask from '../Modals/CreateTask'
import Card from './Card'
const Todo = ({toggle}) => {
  const[modal,setModal]=useState(false)
  const [taskList,setTaskList]=useState([])

  useEffect(()=>{
    let arr=localStorage.getItem("taskList")
    if(arr){
      let obj=JSON.parse(arr)
      setTaskList(obj)
    }
  },[])

 const deleteTask=(index)=>{
 let tempList=taskList;
 tempList.splice(index,1);
 localStorage.setItem("taskList", JSON.stringify(tempList))
 setTaskList(tempList);
 window.location.reload();
 }

  const handletoggle=()=>{
    setModal(!modal)
  }

  const saveTask=(taskObj)=>{
 let tempList=taskList;
 tempList.push(taskObj)
 localStorage.setItem("taskList",JSON.stringify(tempList))
 setTaskList(tempList)
 setModal(false)
  }
 const updateListArray=(obj,index)=>{
  let tempList=taskList;
  tempList[index]=obj;
  localStorage.setItem("taskList",JSON.stringify(tempList));
  setTaskList(tempList)
  window.location.reload();
 }

  return (
    <>
    <section>
        <Navbar/>
    <div className=" header text-center ">
     <h3 className='text-primary fs-5 fw-bold '>ToDo List</h3>
     <button className='btn btn-primary text-light fs-5 fw-bold p-0  px-2 m-0' onClick={()=>setModal(true)} >Create Task</button>
    </div>
    <div className="task_container">
    {
      taskList &&
      taskList.map((obj,index)=>
      <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
      )
    }
    </div>
    <CreateTask  toggle={handletoggle} modal={modal} save={saveTask} />
    </section>
    </>
  )
}

export default Todo