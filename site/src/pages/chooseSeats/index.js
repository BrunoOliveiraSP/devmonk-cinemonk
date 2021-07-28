import { useEffect, useState } from 'react';

import PageContainer from '../../components/page'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SeatRow from './seatsRow'
import { Container, RoundedButton } from './styled'

import SeatService from '../../services/seatService';
import { useHistory } from 'react-router-dom';
const api = new SeatService();


export default function ChooseSeats(props) {
    const navigation = useHistory();
    
    const { data, horario, filme } = props.location.state;
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([])
        

    useEffect(() => {
        async function loadSeats() {
            let resp = await api.listSeats(data, filme.nome, horario.sala, horario.hora)
            setSeats(resp);
        }
        loadSeats();
    }, []);


    const chooseSeat = (seat) => {
        const select = () => setSelectedSeats([...selectedSeats, seat])
        const unselect = () => setSelectedSeats([...selectedSeats.filter(x => `${x.letra}${x.numero}` !== `${seat.letra}${seat.numero}`)])
        return { select, unselect }
    }


    const proximo = () => {
        navigation.push('/pagamento', { seats: selectedSeats, movie: filme, session: horario});
    }
    
    
    return (
        <PageContainer 
            description="Selecione os melhores lugares"
            descriptionOnTop={true}>

            <Container>
                
                {seats.map(item => 
                    <SeatRow row={item} key={item.letra} chooseSeat={chooseSeat} />    
                )}
            
                
                <RoundedButton onClick={proximo}>
                    Próximo
                </RoundedButton>

            </Container>
            <ToastContainer />
        </PageContainer>
    )
}