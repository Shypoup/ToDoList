import * as TYPES from './types';


export const addNewTaskAction =(tasks:any)=> (dispatch:any)=>{
    dispatch({type:TYPES.ADD_NEW_TASK , payload:tasks})
}

export const deleteTaskAction =(id:any)=> (dispatch:any)=>{
    dispatch({type:TYPES.DELETE_TASK , payload:id})
}