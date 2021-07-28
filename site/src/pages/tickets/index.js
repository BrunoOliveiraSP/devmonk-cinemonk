import Ticket from './ticket'
import { Container } from './styled'


export default function Home() {

  return (
    <Container>
      <div className="logo">
        <img src="/assets/images/logo.png" alt="" />
      </div>
      <div className="title">
        CineMonk
      </div>
      <div className="description">
        Parabéns! Sua compra foi realizada com sucesso. <br /> Agora é só aproveitar o filme :)
      </div>
      <div className="tickets">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </Container>
  )
}