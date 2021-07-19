import { Container } from './styled'

import { Link } from 'react-router-dom'

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
        O que você quer fazer?
      </div>
      
      <Link to="/sessao">
        <button className="btn">
            <div> COMPRAR INGRESSO </div>
        </button>
      </Link>
          
    </Container>
  )
}

