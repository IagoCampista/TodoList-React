import React, { createContext, useContext, useState } from 'react';
import { TaskList } from './components/TaskList';

export const TasksContext = createContext(87);
/*
export const TasksProvider = props => {
    const [totalTasks, setTasks] = useState(783);
    return(
        <TasksContext.Provider value={89}>
            {props.children}
        </TasksContext.Provider>
    );
}*/