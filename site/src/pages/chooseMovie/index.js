import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import PageContainer from '../../components/page';
import BoxMovie from './box'

import { Content } from './styled'

import Service from '../../services/sessionService'
const api = new Service();


export default function ChooseMovie(props) {
  const { data } = useParams();
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    async function load() {
      const resp = await api.listMovies(data);
      console.log(resp);
      setMovies(resp);
    }
    load();
  }, [])


  return (
    <PageContainer 
      description="Selecione o filme que deseja assistir"
      descriptionOnTop={true}> 
      <Content>
        {movies.map(item =>
          <BoxMovie movie={item} />
        )}
      </Content>
    </PageContainer>
  )
}
