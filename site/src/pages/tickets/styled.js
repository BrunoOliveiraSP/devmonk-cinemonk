import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-image: url('/assets/images/bg.png');
  background-position: bottom center;
  background-size: cover;


  .logo img {
    width: 90px;
    height: auto;

    margin-top: 3em;
  }

  .title {
    font: bold 3.5em SeoulHangang;
    color: #F0A124;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  }

  .description {
    font: 2em ShareTech;
    color: #E1E1E1;
    text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

    margin-top: 1em;
    margin-bottom: 1em;

    text-align: center;
  }

  .tickets {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    width: 60em;
    margin: 0em auto;
  }
  
`


export { Container }