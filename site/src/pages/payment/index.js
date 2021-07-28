import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';
import PageContainer from '../../components/page';
import BoxMovie from './boxMovie'
import Dropdown from './dropdown'

import { Content, Payment, Details, SeatBox, OrderBox, RoundedButton } from './styled'

export default function PaymentComp(props) {
    const { location: { state: { movie: filme, session: horario } } } = props
    const [seats, setSeats] = useState(props.location.state.seats)

    const choosePayment = (value, seat) => {
        seat.tipo = value;
        setSeats([...seats])
    }

    const getQtdMeias = () => {
        return seats.filter(x => x.tipo === 'Meia').length;
    }

    const getQtdInteiras = () => {
        return seats.filter(x => x.tipo === 'Inteira').length;
    }

    const getTotal = () => {
        return getQtdInteiras() * 30 + getQtdMeias() * 15;
    }


    const buyTickets = () => {
        toast('Compra realizada com sucesso!')
        console.log(seats)
    }

  return (
    <PageContainer 
      description="Selecione as opções de pagamento"
      descriptionOnTop={true}> 
      <Content> 
        <BoxMovie movie={filme} session={horario} />
        <Payment>
          <Details>
            <SeatBox> 
              <div className="title"> Lugares </div>
              <div className="seats">
                {seats.map((item, i) => 
                    <div key={i}> 
                        <div> {`${item.letra}${item.numero}`} </div>
                        <div> <Dropdown onChange={e => choosePayment(e.target.value, item)} value={item.tipo} /> </div> 
                    </div>
                )}
              </div>
            </SeatBox>
            
            <OrderBox> 
              <div className="title"> Pedido </div>
              <div className="resume">
                <div>
                  <div> Ingressos Meia: </div>
                  <div> {getQtdMeias()} </div>
                </div>
                <div>
                  <div> Ingressos Inteira: </div>
                  <div> {getQtdInteiras()} </div>
                </div>
                <div>
                  <div> <b> Total: R$ {getTotal().toFixed(2)} </b> </div>
                </div>
              </div>
            </OrderBox>
          </Details>

          <RoundedButton onClick={buyTickets}>
            Comprar
          </RoundedButton>
        
        </Payment>
        </Content>
        <ToastContainer />
    </PageContainer>
  )
}
