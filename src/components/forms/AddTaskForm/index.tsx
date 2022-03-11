import React, { useState } from 'react'
import { DefaultDatePicker, DefaultInput, DefaultSelect } from '../../inputs'
import {Grid ,Button} from '@mui/material';
import { assigneesOptions, perorityOptions, statusOptions } from '../../../constants/Dummy';
import { useDispatch } from 'react-redux';
import { addNewTaskAction } from '../../../redux/actions/tasksAction';
import moment from 'moment';
const AddTaskForm = () => {
  const dispatch=useDispatch();
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [startDate,setStartDate]=useState(null);
  const [deadline,setDeadline]=useState(null);
  const [assignee,setAssignee]=useState('');
  const [status,setStatus]=useState('');
  const [periority,setPeriority]=useState('');


  const addTask =()=>{
    if(title ==='' || description === '' ||startDate ===null ||deadline===null || assignee ==='' || status==='' || periority ===''){
      alert('please fill all inputs')
    }else{
      let task ={id:Math.random(),title,description,startDate:moment(startDate).format('LL'),deadline: moment(deadline).format('LL'),assignee,status,periority}
      dispatch(addNewTaskAction(task));
      _clearFields()
    }
  }

  const _clearFields =()=>{
    setTitle('');
    setDescription('');
    setStartDate(null);
    setDeadline(null);
    setAssignee('');
    setStatus('');
    setPeriority('');
  }

  return (
    <Grid container xs={10}  direction={'column'}>
      {/* title */}
        <DefaultInput
          label="Title"
          placehloder='Title of task'
          value={title}
          onChange={setTitle}
        />
      <br/>
         {/* description */}
         <DefaultInput
          label="Description"
          placehloder='description of task'
          value={description}
          onChange={setDescription}
          multiline={true}
        />
  <br/>
      {/* Assignee */}
      <DefaultSelect
       label="Assignee"
       value={assignee}
       onChange={setAssignee}
       options={assigneesOptions}
      />
      <br/>
      {/* periority */}
      <DefaultSelect
       label="Periority"
       value={periority}
       onChange={setPeriority}
       options={perorityOptions}
      />
      <br/>
      {/* Assignee */}
      <DefaultSelect
       label="Status"
       value={status}
       onChange={setStatus}
       options={statusOptions}
      />

    

      <br/>
      {/* start date */}
      <DefaultDatePicker
          label="Start time"
          value={startDate}
          onChange={setStartDate}
      />
      <br/>
      {/* deadline */}
      <DefaultDatePicker
          label="Deadline"
          value={deadline}
          onChange={setDeadline}
      />
      
      <br/>

      {/* Button */}
      <Button variant="contained" onClick={()=> addTask()}>Add Task</Button>
    </Grid>
  )
}

export default AddTaskForm;