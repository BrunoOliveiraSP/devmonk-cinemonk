import styled from 'styled-components'

const TicketBox = styled.div`

  font: 1em ShareTech;

  width: 11em;
  height: 7em;

  padding: 1em 0.2em 0em 4.2em;
  margin: 1em 2em;

  color: #FFF;

  background-image: url('/assets/images/ticket.png');
  background-size: 100% 100%;

  .authentication {
    color: #960404;
  }

  .time {
    font-size: .8em;
    color: #373737;
  }

  .movie {
    color: #000;
    padding-right: 2.8em;
    margin: .3em 0em;
  }

  .session {
    color: #960404;
  }

`




export default function Ticket() {
  return (
    <TicketBox>
      <div className="authentication"> A1 MEIA #864825684 </div>
      <div className="time"> 04/06/2021 17:02 </div>
      <div className="movie"> Harry Potter e a Pedra Filosofal </div>
      <div className="session"> Dublado • Sala 08 • 13:00h </div>
    </TicketBox>
  )
}