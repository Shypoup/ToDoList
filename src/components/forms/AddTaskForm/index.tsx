import React, { useState } from 'react'
import { DefaultDatePicker, DefaultInput, DefaultSelect } from '../../inputs'
import {Grid ,Button ,Typography ,Fab} from '@mui/material';
import { assigneesOptions, perorityOptions, statusOptions } from '../../../constants/Dummy';
import { useDispatch } from 'react-redux';
import { addNewTaskAction } from '../../../redux/actions/tasksAction';
import moment from 'moment';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

interface  AddTaskFormInterface{
  setShowAddForm:Function
}
const AddTaskForm = (props:AddTaskFormInterface) => {
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
    <Grid container xs={10}  direction={'row'} className='addTaskForm'>

      {/* header */}
      <Grid container xs={12} alignItems='center' justifyContent='space-between' >
              <Typography variant="h5" component="h5" className='header'>Add new task</Typography>
              <Fab color="inherit" aria-label="add" size='small' className='addButton' onClick={() => props.setShowAddForm(false)}>
                <CloseIcon color="inherit" className='closeIcon' />
              </Fab>
            </Grid>

            <Grid container xs={12}  direction='column'>
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
      <Button variant="contained" className="confirmButton" onClick={()=> addTask()}>Add Task</Button>
      </Grid>
    </Grid>
  )
}

export default AddTaskForm;