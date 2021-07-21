import styled from "styled-components"
import Seat from './seat'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: .15em 0em;
`


const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font: bold 1.1em Spartan;

    padding-top: 0.2em;
    min-width: 2.5em;
    width: 2.5em;
    height: 2.3em;
    
    background: #AA0A0A;
    border-radius: 13px;
    color: #fff;
`


const Seats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    flex-grow: 1;
`


const BlankSeatContainer = styled.div`
    display: flex;
`;


const BlankSeat = styled.div`
    width: 2.8em;
    height: 2.6em;

    font: bold 1em Spartan;
    color: #fff;

    margin: 0em .2em;
`





export default function SeatsRow(props) {

    return (
        <Container>
            <Letter>
                A
                {/* Carregar letra aqui */}
            </Letter>
            
            <Seats>
                {/* Carregar lugares aqui */}
                <Seat info={{ numero: 1 }} />
                <Seat info={{ numero: 2 }} />
                <Seat info={{ numero: 3 }} />
                <Seat info={{ numero: 4 }} />
                <Seat info={{ numero: 5 }} />
            </Seats>

        </Container>
    )
}

 