import * as TYPES from './types';


export const addNewTaskAction =(tasks:any)=> (dispatch:any)=>{
    dispatch({type:TYPES.ADD_NEW_TASK , payload:tasks})
}