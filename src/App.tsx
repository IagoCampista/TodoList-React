import { TaskList } from './components/TaskList/TaskList'
import { Header } from "./components/Header/Header";
import { TaskSummary } from './components/TaskSummary';
import './styles/global.scss'
import { TasksContext } from './TasksContext';


export function App() {
  return (
    <>
      <Header />
      <TasksContext.Provider value={[]}>
        <TaskList />
        <TaskSummary />
      </TasksContext.Provider>
    </>
  )
}