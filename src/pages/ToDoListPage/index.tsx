import React from 'react'
import SideDrawer from '../../components/SideDrawer'
import { Grid, Typography ,TextField } from '@mui/material';
import './styles.css';
import DataTable from 'react-data-table-component';
import {tableData ,tableColumns} from  '../../constants/Dummy';
import { DefaultInput } from '../../components/inputs';
import { AddTaskForm } from '../../components/forms';


const ToDoListPage = () => {
  return (
    <Grid xs={12} container direction='row' className='toDoListPage' justifyContent='center'>

      {/* side bar */}
      <Grid xs={1}>
        <SideDrawer />;
      </Grid>

      {/* Content */}
      <Grid xs={11} container direction={'column'}  justifyContent='space-between'>

       

        <Grid xs={9} container >
        <Typography variant="h5" component="h5" className='header'>Tasks List</Typography>
          <DataTable
            title="Tasks"
            columns={tableColumns}
            data={tableData}
            pagination
            selectableRows
          />
        </Grid>
       
        <Grid xs={3} container  className='addForm' justifyContent='center'>
        <Grid container xs={10}  direction={'column'}>
        <Typography variant="h5" component="h5" className='header'>Add new task</Typography>
        </Grid>

        <AddTaskForm/>
        
        </Grid>
      </Grid>

    </Grid>
  )
}

export default ToDoListPage;