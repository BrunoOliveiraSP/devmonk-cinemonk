import { useHistory } from 'react-router-dom';
import PageContainer from '../../components/page';
import BoxMovie from './boxMovie'
import BoxSession from './boxSession'

import { Content, Sessions } from './styled'




export default function ChooseSession() {
  const { location: { state: { filme, horarios } } } = useHistory();

  return (
    <PageContainer 
      description="Selecione o horario e o idioma"
      descriptionOnTop={true}> 
      
      <Content> 
        <BoxMovie movie={filme} />
        
        <Sessions>
          {horarios.map(item => 
            <BoxSession session={item} />
          )}
        </Sessions>
        
      </Content>
    </PageContainer>
  )
}
