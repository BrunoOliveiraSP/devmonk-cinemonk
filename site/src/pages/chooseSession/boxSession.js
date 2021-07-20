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
  const {sala, hora, audio} = props.session
  return (
    <Container>
      <div className="sala"> Sala {sala} </div>
      <div className="hora"> {hora} </div>
      <div className="idioma"> {audio} </div>
    </Container>
  )
}