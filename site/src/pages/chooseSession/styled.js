import styled from 'styled-components'



const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > * {
    margin: 0em 1.0em;
  }
`

const Sessions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  flex-wrap: wrap;
  
  width: 32em;
`


export { Content, Sessions }