import styled from 'styled-components'


const Container = styled.div`
  width: 13em;
  
  background: #AA0A0A;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;

  text-align: center;
  padding: 0.3em;

  & img {
    height: 17em;
    width: 100%;
    border-radius: 16px 16px 0px 0px;
  }


  .movie-info {
    display: flex;
    flex-direction: column;

    padding: .3em 1em;
  }

  .movie-info > div {
    margin: 0.3em;
  }

  .movie, .movie img {
    height: 11em;
    width: auto;

    border-radius: 16px 0px 0px 0px;
  }

  .title {
    font-family: ShareTech;
    font-size: 1.2em;
    color: #FFCA76;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .description {
    font-family: ShareTech;
    font-size: 1em;

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`




export default function Box(props) {
    const { nome, classificacao, capa, idiomas } = props.movie;
  
    return (
        <Container>
        <img src={capa} alt="" />
        <div className="movie-info">
                <div className="title"> {nome} </div>
            <div>
                <div className="description"> {idiomas} </div>
                <div className="description"> Classificação: {classificacao} </div>
            </div>
            </div>
        </Container>
  )
}