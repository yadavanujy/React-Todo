import React, {useState} from 'react';
import EditTask from '../Modals/EditTask'
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import EditTask from '../modals/EditTask';
const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
       

      <div className="cardcontainer">
        <div class = "card-top" style={{"background-color": colors[index%5].primaryColor ,"height":"4px"}}></div>
       <div className="card">
        <div className="heading">
        <h3 className='taskname text-primary fs-5 fw-bold ' style={{"color": colors[index%5].primaryColor}}>{taskObj.Name} </h3>
        <h6 className='taskdescription'>{taskObj.Description} </h6>
        </div>
        <div className="status">
            <p className='statuspara'>{taskObj.Status}</p>
            <div className="cardicon">
         <FaRegEdit className='edit fs-4 text-success fw-bold ' onClick = {() => setModal(true)}/>
         <AiFillDelete className='delete fs-2 text-danger fw-bold' onClick = {handleDelete} />
         </div>
        </div>
         {/* <div className="cardicon">
         <FaRegEdit className='edit fs-4 text-success fw-bold ' onClick = {() => setModal(true)}/>
         <AiFillDelete className='delete fs-2 text-danger fw-bold' onClick = {handleDelete} />
         </div> */}
       </div>
       <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
      </div>
     


    );
};

export default Card;