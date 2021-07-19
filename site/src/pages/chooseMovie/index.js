import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import PageContainer from '../../components/page';
import BoxMovie from './box'

import { Content } from './styled'


export default function ChooseMovie(props) {
  const { data } = useParams();
  const [movies, setMovies] = useState([]);
      
  return (
    <PageContainer 
      description="Selecione o filme que deseja assistir"
      descriptionOnTop={true}> 
      <Content>
        <BoxMovie />
        <BoxMovie />
        <BoxMovie />
        <BoxMovie />
        <BoxMovie />
        <BoxMovie />
      </Content>
    </PageContainer>
  )
}
