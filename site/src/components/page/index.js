
import { PageContainer } from './styled'
import Header from '../header'

export default function Page(props) {
  return (
    <PageContainer>
      <Header 
        description="Descrição"
        descriptionOnTop={props.descriptionOnTop} />

      {props.children}
    
    </PageContainer>
  )
}
