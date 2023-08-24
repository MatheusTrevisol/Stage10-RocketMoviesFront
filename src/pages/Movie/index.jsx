import { Container, Content } from './styles';

import { api } from '../../services/api';
import { useState, useEffect } from 'react';

import { format, parseISO } from 'date-fns';

import { useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import { FiArrowLeft } from 'react-icons/fi';
import { RxUpdate } from 'react-icons/rx';
import { MdOutlineWatchLater} from 'react-icons/md';

import userImagePlaceholder from '../../assets/avatar_placeholder.svg';

export function Movie() {
  const [data, setData] = useState('')
  const [userImg, setUserImg] = useState(null)
  const [movie, setMovie] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  const filesUrl = `${api.defaults.baseURL}/files/`;

  function handleBack() {
    navigate(-1);
  }

  function handleUpdateMovieNote() {
    navigate(`/update-movie/${params.id}`);
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${params.id}`);

      setMovie(response.data)
      setData(response.data.created_at)
    }

    fetchMovie();
  }, []);
  
  /* FORMAT DATE */ 
  useEffect(() => {
    if (movie.created_at) {
      const data = movie.created_at;
      const parsedData = parseISO(data); // Converte a string em um objeto de data
      const formattedDataString = format(parsedData, 'dd/MM/yyyy HH:mm:ss');
      setData(formattedDataString);
    }
  }, [movie])

  /* SET USER AVATAR IMG */
  useEffect(() => {
    if(movie.user_avatar) {
      const userImg = `${filesUrl}/${movie.user_avatar}`;

      setUserImg(userImg)
    } else {
      const userPlaceholder = userImagePlaceholder;

      setUserImg(userPlaceholder)
    }

  }, [movie])

  return (
    <Container>
      <Header />

      {
        movie &&        
        <main>
          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>

          <button type="button" onClick={handleUpdateMovieNote}>
            <RxUpdate />
            Atualizar Nota
          </button>
          <Content>
            <div id="movieNameRating">
              <h1>{movie.title}</h1>
              <Stars rating={movie.rating} />
            </div>

            <div id="movieAuthorDate">
              <img src={userImg} alt={`Foto do usuário ${movie.user_name}`} />
              <span className="author">Por {movie.user_name}</span>
              <MdOutlineWatchLater />
              <span className="time">{data}</span>
            </div>

            {
              movie.tags.length > 0 &&
              <div id="movieTags">
                {
                  movie.tags.map(tag => {
                    return (
                      <Tag key={String(tag.id)} title={tag.name}/>
                    )
                  })
                }
              </div>
            }

            {
              movie.description &&
              <p>
                {movie.description}
              </p>
            }           
          </Content>
        </main>
      }
    </Container>
  );
};