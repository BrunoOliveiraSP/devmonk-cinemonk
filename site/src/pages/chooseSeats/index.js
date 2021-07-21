import { useEffect, useState } from 'react';

import PageContainer from '../../components/page'

import SeatRow from './seatsRow'
import { Container, RoundedButton } from './styled'

import SeatService from '../../services/seatService';
const api = new SeatService();


export default function ChooseSeats() {
    const [seats, setSeats] = useState([null]);

    useEffect(() => {
        async function loadSeats() {
            // chamar api e carregar seats
        }
        loadSeats();
    }, []);
    
    
    return (
        <PageContainer 
            description="Selecione os melhores lugares"
            descriptionOnTop={true}>

            <Container>
                
                {seats.map(item => 
                    <SeatRow row={item} />    
                )}
            
                <RoundedButton>
                    Próximo
                </RoundedButton>

            </Container>
            
        </PageContainer>
    )
}