import {
    ADD_NEW_TASK,
    DELETE_TASK
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
            case DELETE_TASK:
                const newArray= state.tasks.filter((item:any )=> item.id !== action.payload);
                console.log({newArray})
                return {
                    // ...state,
                    tasks: state.tasks.filter((item:any )=> item.id !== action.payload),
                    
                };
            default:
                return state;
        }
    };
    export default TasksReducer;
    