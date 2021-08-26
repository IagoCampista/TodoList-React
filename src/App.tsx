import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import { TaskSummary } from './components/TaskSummary';
import './styles/global.scss'
import { TasksContext } from './TasksContext';


export function App() {
  return (
    <>
      <Header />
        
          <TaskList />
          <TaskSummary />
        
    </>
  )
}

/*
<TasksContext.Provider value={totalTasks} />
  <TaskList />
  <TaskSummary />
</TasksContext.Provider>
*/