import {ADD_NEW_TASK,DELETE_TASK,EDIT_TASK} from './types';


export const addNewTaskAction =(tasks:any)=> (dispatch:any)=>{
    dispatch({type:ADD_NEW_TASK , payload:tasks})
}

export const deleteTaskAction =(id:any)=> (dispatch:any)=>{
    dispatch({type:DELETE_TASK , payload:id})
}

export const editTaskAction =(task:any)=> (dispatch:any)=>{
   
    dispatch({type:EDIT_TASK , payload:task})
    console.log("editTaskAction")
}