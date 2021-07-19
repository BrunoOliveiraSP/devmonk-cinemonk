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
    font: 2.8em ShareTech;
    color: #E1E1E1;
    text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);

    margin-top: 2em;
    margin-bottom: 2em;
  }

  .btn {
    width: 220px;
    
    background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
    box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 54px;

    outline: none;
    cursor: pointer;
    border: none;
  }

  .btn div {
    padding: 1.3em 0px;
    margin: 0px auto;

    font: 2.5em ShareTech;
    text-align: center;
    line-height: 40px;
    color: #E1E1E1;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`


export { Container }