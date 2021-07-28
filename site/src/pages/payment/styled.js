import styled from 'styled-components'



const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 0em 2.0em;
  }
`

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  flex-wrap: wrap;
  
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background: linear-gradient(180deg, #AA0A0A 0%, rgba(83, 0, 0, 0.92) 126.82%);
  border-radius: 10px;
  padding: 1.5em 3em;

  margin-bottom: 2em;

  width: 32em;
`

const SeatBox = styled.div`
  color:#fff;

  .title {
    font: bold 1.5em Spartan;
    text-align: center;
    color: #FFB540;
    
    padding-bottom: 1em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .seats > div > div {
    display: inline-block;
    margin: 0.2em 0.5em;
    width: 2em;
  }

  .seats > div {
      width: 11em;
  }

  .seats {
      height: 10em;
      overflow-y: auto;
      padding-right: 2em;
  }

  
  /* Barra completa vertical */
  .seats::-webkit-scrollbar-track
  {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 30px;
      background-color: #000;
  }

  /* Barra completa vertical */
  .seats::-webkit-scrollbar
  {
      width: 6px;
      border-radius: 30px;
      background-color: #000;
  }

  /* Barra scroll */
  .seats::-webkit-scrollbar-thumb
  {
      border-radius: 20px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #FFB540;
  }

`

const OrderBox = styled.div`
  color:#fff;

  .title {
    font: bold 1.5em Spartan;
    text-align: center;
    color: #FFB540;
    
    padding-bottom: 1em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .resume > div > div:first-child {
    width: 8em;
    text-align: left;
  }

  .resume > div:last-child {
    text-align: left;
  }

  .resume > div > div {
    display: inline-block;
    margin: 0.2em 0.5em;
  }
`


const RoundedButton = styled.div`
    /* position: absolute;
    bottom: -20px;
    right: -60px; */
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;

    font: bold 1.3em Spartan;
    color: #626262;
    cursor: pointer;

    height: 7em;
    width: 7em;
    border-radius: 10em;

    background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
`




export { Content, Payment, Details, SeatBox, OrderBox, RoundedButton }