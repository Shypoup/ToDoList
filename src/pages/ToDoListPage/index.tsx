import React, { useState } from 'react';
import { Grid, Typography ,Fab, useMediaQuery, useTheme  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './styles.css';
import DataTable from 'react-data-table-component';
import { tableColumns } from '../../constants/Dummy';

import { AddTaskForm } from '../../components/forms';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { DefaultNavbar } from '../../components/other';


const ToDoListPage = () => {
  const tasks = useSelector(
    (state: RootState) => state.tasksReducer.tasks
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const theme=useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down('md'));
  const mobile= useMediaQuery(theme.breakpoints.down('sm'));
  const isMatch = mobile ||tablet;
  return (
    <Grid xs={12} container direction='column' className='toDoListPage' justifyContent='center' >
      <DefaultNavbar />
      {/* Content */}

      <Grid xs={12} container direction='row' justifyContent='center' >
      {(showAddForm && isMatch) ? null:
        <Grid xs={showAddForm ? 9:12} container justifyContent='center' className='tableContainer'>

          {/* Table header */}
          <Grid xs={11} container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant="h5" component="h5" className='header'>Tasks List</Typography>
            <Fab color="inherit" aria-label="add" size='small' className='addButton' onClick={() => setShowAddForm(true)}>
              <AddIcon color="inherit" className='addIcon'/>
            </Fab>
          </Grid>

          {/*Table  */}
          <Grid xs={11} container direction='column' justifyContent='flex-end' >

            <DataTable

              columns={tableColumns}
              data={tasks}
              pagination
              selectableRows
            />
          </Grid>
        </Grid>
}
      
      {showAddForm &&
        <Grid xs={isMatch ? 12 :3} container  direction='row' className='addForm' justifyContent='center'>
          <AddTaskForm setShowAddForm={setShowAddForm}/>

        </Grid>
      }
      </Grid>
    </Grid>
  )
}

export default ToDoListPage;