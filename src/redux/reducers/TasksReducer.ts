import {
    ADD_NEW_TASK
    } from '../actions/types';
    
    const initialState:any = {
      tasks:[],
    
    
    
    };
    const TasksReducer = (state = initialState, action:any) => {
     
        switch (action.type) {
            case ADD_NEW_TASK:
                return {
                    ...state,
                   tasks:[...state.tasks, action.payload]
                };
            
            default:
                return state;
        }
    };
    export default TasksReducer;
    