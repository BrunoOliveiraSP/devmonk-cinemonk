import { useHistory } from 'react-router-dom';
import PageContainer from '../../components/page';
import BoxMovie from './boxMovie'
import BoxSession from './boxSession'

import { Content, Sessions } from './styled'


export default function ChooseSession() {
  
  return (
    <PageContainer 
      description="Selecione o horario e o idioma"
      descriptionOnTop={true}> 
      
      <Content> 
        <BoxMovie />
        
        <Sessions>
          <BoxSession />
          <BoxSession />
          <BoxSession />
          <BoxSession />
          <BoxSession />
          <BoxSession />
        </Sessions>
        
      </Content>
    </PageContainer>
  )
}
