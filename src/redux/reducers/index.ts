import { combineReducers } from 'redux';
import TasksReducer from './TasksReducer';
export const rootReducer = combineReducers({
    
    tasksReducer:TasksReducer
});
