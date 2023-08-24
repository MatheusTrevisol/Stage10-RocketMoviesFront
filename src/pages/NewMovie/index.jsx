import { Container, Form } from './styles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function NewMovie() {
  const navigate = new useNavigate();
  
  function handleBack() {
    navigate(-1)
  }

  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [observations, setObservations] = useState();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  
  function handleSetTags() {
    if(newTag.length <= 2) {
      return alert("Por favor digite uma tag válida, com mais de 2 caracteres")
    }

    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleSaveNewMovie() {
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

    await api.post("/movie_notes", {
      title,
      description: observations,
      rating,
      tags
    });   

    alert("Filme cadastrado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      
      <main>
        <button type="text" onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
        <Form>
          <Section title="Novo filme">
            <div id="inputDivSeparator">
              <Input 
                placeholder="Título"
                type="text" 
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)"
                type="text" 
                onChange={e => setRating(e.target.value)}
              />
            </div>
            
            <textarea 
              name="observations" 
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
              <Button type="button" title="Excluir Filme" className="otherButtonColor" />
              <Button type="button" title="Salvar alterações" onClick={handleSaveNewMovie} />
            </div>

          </Section>

        </Form>
      </main>
    </Container>
  );
};