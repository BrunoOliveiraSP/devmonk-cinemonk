import { useState } from "react"
import styled from "styled-components"

import { toast } from 'react-toastify';
import { TOTEN_ID } from '../../services/config'

import SeatService from '../../services/seatService'
const service = new SeatService();



const Seat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url('/assets/images/${props => props.seatType}');
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


    const getSeatType = () => {
        return 'seat.png';
    }
    

    const reserveClick = async () => {
        toast('Clicou');
    }

    return (
        <div>
            <Seat
                onClick={reserveClick}
                seatType={getSeatType()}  >
                {seat.numero}
            </Seat>            
        </div>
    )
}

