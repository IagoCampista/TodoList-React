import { TaskList } from './components/TaskList/TaskList'
import { Header } from "./components/Header/Header";
import { TaskSummary } from './components/TaskSummary';
import './styles/global.scss'


export function App() {
  return (
    <>
      <Header />
      <TaskList />
      <TaskSummary />
    </>
  )
}