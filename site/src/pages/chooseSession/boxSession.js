import styled from 'styled-components'


const Container = styled.div`
    padding: .7em 1.3em;
    
    background: #AA0A0A;
    border-radius: 13px; 

    margin: .5em;
    text-align: center;

    & div {
      margin: 0.1em 0em;
    }
    
    .sala {
      font: bold 1em SpaceMono;
      color: #fff;
    }

    .hora {
      font: 800 1.6em Spartan;
      color: #fff;
    }

    .idioma {
      font: bold 1.2em SpaceMono;
      color: #fff;
    }   
`




export default function Box(props) {
  return (
    <Container>
      <div className="sala"> Sala 01 </div>
      <div className="hora"> 08:40 </div>
      <div className="idioma"> Legendado </div>
    </Container>
  )
}