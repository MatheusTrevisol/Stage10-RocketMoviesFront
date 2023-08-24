import { Container, Form, BackgroundImg  } from './styles';

import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    };

    try {
      await api.post("/users", {name, email, password })

      alert("Usuário cadastrado com sucesso!");
      return navigate('/')
    } catch(error) {
      // if(error.response) {
      //   return alert(error.response.data.message);
      // }
    }
  }

  function handleBack() {
    return navigate(-1);
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>

        <div id="inputDivSeparator">
          <Input icon={FiUser} placeholder="Nome" type="text" onChange={e => setName(e.target.value)}/>
          <Input icon={FiMail} placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)}/>
          <Input icon={FiLock} placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)}/>
        </div>

        <Button title="Cadastrar" type="button" onClick={handleSignUp}/>

        <button id="buttonBack" type="button" onClick={handleBack}>
          <FiArrowLeft />
          Voltar para o login
        </button>
      </Form>

      <BackgroundImg />
    </Container>
  )
}