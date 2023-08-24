import { Container } from "./styles";

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Link, useNavigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieTag } from "../../components/MovieTag";

import { GrAdd } from "react-icons/gr";

export function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] =useState('');
  
  useEffect(() => {
    async function handleFetchMoviesNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);

      setNotes(response.data);
    }

    handleFetchMoviesNotes();
  }, [search])

  function handleMovieTagDetails(movie_id) {
    navigate(`/movie/${movie_id}`);
  };

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />      

      <main>
        <header id="headerSeparator">
          <h2>Meus Filmes</h2>
          <Link to="/register-movie">
            <GrAdd />
            Adicionar Nota
          </Link>
        </header>
        
        {
          notes.length > 0 && 
          <Section>
            <div id="movieTagContainer">
              {
                notes.map(note => (
                  <MovieTag
                    key={String(note.id)}
                    onClick={() => handleMovieTagDetails(note.id)}
                    data={{
                      movieTitle: note.title,
                      rating: note.rating,
                      description: note.description,
                      tags: note.tags
                    }}
                  />
                ))                
              }
            </div>
          </Section>
        }
      </main>
    </Container>
  )
}