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
        if (!seat.totenId)
            return 'seat.png'
        else if (seat.situacao === 'Ocupado')
            return 'seat-gray.png'
        else {
            var now = new Date();
            var reserved = new Date(seat.expiracao)
            var seconds = (now - reserved) / 1000;

            if (seconds > 300)
                return 'seat.png'
            else if (seat.totenId !== TOTEN_ID)
                return 'seat-gray.png'
            else
                return 'seat-blue.png'
        }
    }
    

    const reserveClick = async () => {
        let { success, reservedType, error } = await service.reserveSeat(seat)
        if (success) {
            if (reservedType === 'Livre')
                setSeat({ ...seat, expiracao: null, totenId: null })
            else
                setSeat({ ...seat, expiracao: new Date(), totenId: TOTEN_ID })
            
            toast(reservedType === 'Reservado' ? 'Lugar reservado. Expira em 5min.' : 'Lugar liberado.');
        } else {
            toast.error(error);
        }
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

