import { useHistory } from 'react-router-dom';
import PageContainer from '../../components/page';
import BoxMovie from './boxMovie'
import BoxSession from './boxSession'

import { Content, Sessions } from './styled'



export default function ChooseSession(props) {
  const { location: { state: { data, filme, horarios } } } = useHistory();

  return (
    <PageContainer 
      description="Selecione o horario e o idioma"
      descriptionOnTop={true}> 
      
      <Content> 
        <BoxMovie movie={filme} />
        
        <Sessions>
          {horarios.map(item => 
            <BoxSession session={item} movie={filme} date={data} key={item.hora} />
          )}
        </Sessions>
        
      </Content>
    </PageContainer>
  )
}
