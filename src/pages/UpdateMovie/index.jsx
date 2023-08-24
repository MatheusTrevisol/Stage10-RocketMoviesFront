import { Container, Form } from './styles';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function UpdateMovie() {
  const navigate = new useNavigate();
  const params = new useParams();

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [observations, setObservations] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleBack() {
    navigate(-1)
  };

  function handleSetTags() {
    if(newTag.length <= 2) {
      return alert("Por favor digite uma tag válida, com mais de 2 caracteres")
    }

    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function fetchMovie() {
    try {
      const response = await api.get(`/movie_notes/${params.id}`);

      const tagsResponse= response.data.tags;
      const tagsMap = tagsResponse.map(tag => tag.name)

      setTags(tagsMap),
      setTitle(response.data.title),
      setRating(response.data.rating),
      setObservations(response.data.description)  

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateMovie() {
    const arrayOfRating = [0, 1, 2, 3, 4, 5]
    const validRating = arrayOfRating.indexOf(Number(rating)) !== -1

    if(newTag) {
      return alert("Você escreveu uma nova tag mas esqueceu de adiciona-la");
    }

    if(!validRating) {
      return alert("Por favor informe uma rating válida, entre 0 e 5 apenas");
    }

    if(!title) {
      return alert("Por favor informe um título para o filme");
    }

    try {
      await api.put(`/movie_notes/${params.id}`, {
        title,
        description: observations,
        rating,
        tags
      });
    } catch (error) {
      //
    }

    alert("Filme Atualizado com sucesso!");
    navigate(-1);
  };

  async function handleDeleteMovie() {
    try {
      await api.delete(`movie_notes/${params.id}`);

      alert("Filme deletado com sucesso.");
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />
      
      <main>
        <button type="text" onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
        <Form>
          <Section title="Atualizar filme">
            <div id="inputDivSeparator">
              <Input 
                placeholder="Título"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="text" 
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
            </div>
            
            <textarea 
              name="observations" 
              value={observations}
              placeholder="Observações" 
              cols="30" 
              rows="10" 
              onChange={e => setObservations(e.target.value)} 
            />

            <div id="highlighterDiv">
              <h4>Marcadores</h4>

              <div id="markersItemsDiv">
                {
                  tags && tags.map((tag, index) => {
                    return (
                      <NoteItem
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    )
                  })
                }
                <NoteItem 
                  $isNew
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleSetTags}
                />
              </div>
            </div>

            <div id="buttonsDivSeparator">
              <Button type="button" title="Excluir Filme" className="otherButtonColor" onClick={handleDeleteMovie}/>
              <Button type="button" title="Salvar alterações" onClick={handleUpdateMovie} />
            </div>

          </Section>

        </Form>
      </main>
    </Container>
  );
};