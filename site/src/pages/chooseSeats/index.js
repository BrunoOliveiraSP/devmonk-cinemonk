import { useEffect, useState } from 'react';

import PageContainer from '../../components/page'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SeatRow from './seatsRow'
import { Container, RoundedButton } from './styled'

import SeatService from '../../services/seatService';
const api = new SeatService();


export default function ChooseSeats(props) {
    const { data, horario, filme } = props.location.state;

    const [seats, setSeats] = useState([]);

    useEffect(() => {
        async function loadSeats() {
            let resp = await api.listSeats(data, filme.nome, horario.sala, horario.hora)
            setSeats(resp);
        }
        loadSeats();
    }, []);
    
    
    return (
        <PageContainer 
            description="Selecione os melhores lugares"
            descriptionOnTop={true}>

            <Container>
                
                {seats.map(item => 
                    <SeatRow row={item} key={item.letra} />    
                )}
            
                <RoundedButton>
                    Próximo
                </RoundedButton>

            </Container>
            <ToastContainer />
        </PageContainer>
    )
}