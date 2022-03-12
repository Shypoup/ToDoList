import {
    ADD_NEW_TASK,
    DELETE_TASK,
    EDIT_TASK
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
                case EDIT_TASK:
                    const newArr=state.tasks.map(
                        (task:any) => task.id === action.payload.id ? action.payload
                                                : task
                    )
                    console.log(newArr)
                    return { 
                        ...state, 
                        tasks: state.tasks.map(
                            (task:any) => task.id === action.payload.id ? action.payload
                                                    : task
                        )
                        };
            case DELETE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter((item:any )=> item.id !== action.payload),
                    
                };
           
            default:
                return state;
        }
    };
    export default TasksReducer;
    