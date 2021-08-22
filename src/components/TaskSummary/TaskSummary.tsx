import { Container } from "./styles";

export function TaskSummary (){

    return(
        <Container>
            <h2>Resumo das Tasks</h2>

            <div className='Card'>
            <header>
                <p>Total Tasks</p>
            </header>
            <strong>5</strong>
            </div>

            <div className='Card'>
            <header>
                <p>Completed Tasks</p>
            </header>
            <strong>35</strong>
            </div>
        </Container>
    )
}