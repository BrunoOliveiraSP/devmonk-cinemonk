import styled from 'styled-components'

const Box = styled.div`
  display: flex;

  padding: .3em;
  
  background: #AA0A0A;
  box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
  border-radius: 16px 16px 0px 0px;

  width: 20em;


  .movie-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 1em;
  }

  .movie, .movie img {
    height: 11em;
    width: auto;

    border-radius: 16px 0px 0px 0px;
  }

  .title {
    font-family: ShareTech;
    font-size: 1.5em;
    color: #FFCA76;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .description {
    font-family: ShareTech;
    font-size: 1.1em;

    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`



export default function BoxMovie(props) {
  
  return (
      <Box>
        <div className="movie">
          <img src="/assets/capa_filme.jpg" alt="" />
        </div>
        <div className="movie-info">
          <div className="title"> Harry Potter e a Pedra Filosofal </div>
          <div>
            <div className="description"> Dublado e Legendado </div>
            <div className="description"> Livre </div>
          </div>
        </div>
      </Box>
  )
}

