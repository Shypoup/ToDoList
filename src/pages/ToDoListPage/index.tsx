import React, { useState } from 'react';
import { Grid, Typography ,Fab, useMediaQuery, useTheme ,IconButton } from '@mui/material';
import './styles.css';
import DataTable from 'react-data-table-component';


import { AddTaskForm } from '../../components/forms';
import { useSelector ,useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { DefaultNavbar } from '../../components/other';
import {Delete as DeleteIcon , Add as AddIcon , Edit as EditIcon} from '@mui/icons-material';
import { deleteTaskAction } from '../../redux/actions/tasksAction';
import toast from 'react-hot-toast';
const ToDoListPage = () => {
  const tasks = useSelector(
    (state: RootState) => state.tasksReducer.tasks
  );
  console.log(tasks)
  const dispatch=useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedTask,setSelectedTask]=useState(null);
  const theme=useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down('md'));
  const mobile= useMediaQuery(theme.breakpoints.down('sm'));
  const isMatch = mobile ||tablet;

  
 const tableColumns = [
  {
    name: 'Title',
    selector: (row: any) => row.title,
    sortable: true,
  },
  {
    name: 'Description',
    selector: (row: any) => row.description,
  },
  {
    name: 'Periority',
    selector:(row: any) => row.periority,
    cell: (row: any) => {
      let className;
      switch (row.periority) {
        case 'high':
          className='highPeriority'
          break;
          case 'medium':
          className='mediumPeriority'
          break;
        case 'low':
          className='lowMedium'
        break;
        default:
          className='lowMedium'
          break;
      }
      return(<p className={className}>{row.periority}</p>)
      },
    sortable: true,
  },
  {
    name: 'Status',
    selector:(row: any) => row.status,
    cell: (row: any) => {
      let className;
      switch (row.status) {
        case 'To-Do':
          className='toDoStatus'
          break;
          case 'In Progress':
          className='inProgressStatus'
          break;
        case 'Done':
          className='doneStatus'
        break;
        default:
          className='toDoStatus'
          break;
      }
      return(
        <div className={className}>
      <p className="statusText">{row.status.toUpperCase()}</p>
      </div>
      )},
    sortable: true,
  },
  {
    name: 'Deadline',
    selector: (row: any) => row.deadline,
    sortable: true,
  },
  {
    name: 'Start date',
    selector: (row: any) => row.startDate,
    sortable: true,
  },
  {
    name: 'assignee',
    selector: (row: any) => row.assignee,
    sortable: true,
  },
  {
    name: '',
    selector: (row: any) => (
      <Grid container direction='row' xs={12}>
      <IconButton aria-label="edit"  color="info" onClick={()=>showEditTaskForm(row.id)}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete"  color="error" onClick={()=>deleteTask(row.id)}>
        <DeleteIcon />
      </IconButton>
      </Grid>
    ),
    sortable: false,
  },
];

const deleteTask =(id:any)=>{
    dispatch(deleteTaskAction(id));
    toast.success('Successfully Task deleted');
}

const showAddTaskForm =()=>{
  setSelectedTask(null);
  setShowAddForm(true);
}

const showEditTaskForm =(id:any)=>{
  const selected =tasks.filter((item:any )=> item.id === id)
  setSelectedTask(selected[0]);
  setShowAddForm(true);
}
  return (
    <Grid xs={12} container direction='column' className='toDoListPage' justifyContent='center' >
      <DefaultNavbar />
      {/* Content */}

      <Grid xs={12} container direction='row' alignItems='flex-start' >
      {(showAddForm && isMatch) ? null:
        <Grid xs={showAddForm ? 9:12} container justifyContent='center' className='tableContainer'>

          {/* Table header */}
          <Grid xs={11} container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant="h5" component="h5" className='header'>Tasks List</Typography>
            <Fab color="inherit" aria-label="add" size='small' className='addButton' onClick={() => showAddTaskForm()}>
              <AddIcon color="inherit" className='addIcon'/>
            </Fab>
          </Grid>

          {/*Table  */}
          <Grid xs={11} container direction='column'  >

            <DataTable

              columns={tableColumns}
              data={tasks}
              pagination
              
            />
          </Grid>
        </Grid>
}
      
      {showAddForm &&
        <Grid xs={isMatch ? 12 :3} container  direction='row' className='addForm' justifyContent='center'>
          <AddTaskForm setShowAddForm={setShowAddForm} selectedTask={selectedTask}/>

        </Grid>
      }
      </Grid>
    </Grid>
  )
}

export default ToDoListPage;