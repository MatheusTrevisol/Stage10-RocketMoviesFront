import { Container, Form, BackgroundImg  } from './styles';

import { useState } from 'react';

import { useAuthProvider } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const { signIn } = useAuthProvider();

  async function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>

        <div id="inputDivSeparator">
          <Input icon={FiMail} placeholder="E-mail" type="text" onChange={e => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
        </div>

        <Button title="Entrar" type="button" onClick={handleSignIn} />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}