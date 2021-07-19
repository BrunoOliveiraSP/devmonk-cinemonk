
import styled from 'styled-components'

const HeaderContainer = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.descriptionOnTop ? "row" : "column"};
  align-items: ${props => props.descriptionOnTop ? "center" : "flex-start"};

  
  width: 100%;
  margin-bottom: 3em;


  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo img {
    width: 90px;
    height: auto;
    
    margin: 0em 1.5em 0em 0em;
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

    margin: ${props => props.descriptionOnTop ? "0em 0em 0em 0em" : "0.4em 0em 0em 2.6em"};
  }

`


export { HeaderContainer }