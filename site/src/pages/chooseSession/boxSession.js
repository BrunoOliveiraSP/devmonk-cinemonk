import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 9em;
    height: 8em;
    
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
  const { sala, hora, audio } = props.session

  const navigation = useHistory()
  const sessionClick = () => {
    navigation.push('/lugares', {
      data: props.date,
      horario: props.session,
      filme: props.movie
    })
  }
    

  return (
    <Container onClick={sessionClick} style={{cursor:'pointer'}}>
      <div className="sala"> Sala {sala} </div>
      <div className="hora"> {hora} </div>
      <div className="idioma"> {audio} </div>
    </Container>
  )
}