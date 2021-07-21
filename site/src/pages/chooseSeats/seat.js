import { useState } from "react"
import styled from "styled-components"

const Seat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url('/assets/images/seat-blue.png');
    background-size: 100% 100%;
    
    width: 2.8em;
    height: 2.6em;

    font: bold 1em Spartan;
    color: #fff;
    cursor: pointer;

    margin: 0em .2em;
`







export default function SeatComponent(props) {
    const [seat, setSeat] = useState(props.info);
    return (
        <Seat>{seat.numero}</Seat>
    )
}