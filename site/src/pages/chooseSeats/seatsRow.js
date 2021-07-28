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





function getSeatLayout(letter, item, chooseSeat) {
    let seats = []
    
    if (letter === 'I' || letter === 'J' || letter === 'K') {
        if (item.numero === 5 || item.numero === 15) {
            seats.push(<BlankSeat />);
        }
    } else if (letter !== 'A') {
        if (item.numero === 4 || item.numero === 14) {
            seats.push(<BlankSeat />);
            seats.push(<BlankSeat />);
        }
    }

    seats.push((<Seat info={item} chooseSeat={chooseSeat} />))

    return (
        <BlankSeatContainer key={`${letter}-${item.numero}`}>
            {seats}
        </BlankSeatContainer>
    );
}




export default function SeatsRow(props) {
    const { letra, lugares } = props.row;

    return (
        <Container>
            <Letter> {letra} </Letter>
            
            <Seats>
                {lugares.map(item =>
                    getSeatLayout(letra, item, props.chooseSeat)
                )}
            </Seats>

        </Container>
    )
}

 