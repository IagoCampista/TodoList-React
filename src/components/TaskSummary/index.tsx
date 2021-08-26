import { useContext } from "react";
import { TasksContext } from "../../TasksContext";
import { Container, Content } from "./styles";


export function TaskSummary (){
    const totalTasks = useContext(TasksContext);

    return(
        <Container>
            <h2>Resumo das Tasks</h2>
            <Content>
                <div className='Card'>
                <header>
                    <p>Total Tasks</p>
                </header>
                <strong>{totalTasks}</strong>
                </div>

                <div className='Card'>
                <header>
                    <p>Completed Tasks</p>
                </header>
                <strong>35</strong>
                </div>
            </Content>
        </Container>
    )
}