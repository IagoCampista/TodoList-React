import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { TaskSummary } from './components/TaskSummary';
import './styles/global.scss'
import { TasksContext } from './TasksContext';
import { useState } from 'react';


export function App() {
  const [totalTasks, setTotaltasks] = useState(0);

  return (
    <>
      <Header />
        <TasksContext.Provider value = {[totalTasks, setTotaltasks]}>
          <TaskList />
          <TaskSummary />
        </TasksContext.Provider>
    </>
  )
}

/*
<TasksContext.Provider value={totalTasks} />
  <TaskList />
  <TaskSummary />
</TasksContext.Provider>
*/