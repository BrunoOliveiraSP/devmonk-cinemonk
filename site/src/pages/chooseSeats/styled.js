
import styled from 'styled-components'


const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    background: rgba(198, 198, 198, 0.9);
    box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25),
          inset 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
    border-radius: 16px 16px 16px 0px;

    padding: 1em 4em;
    margin: 0em 2em;
`;



const RoundedButton = styled.div`
    position: absolute;
    bottom: -20px;
    right: -60px;

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





export { Container, RoundedButton }