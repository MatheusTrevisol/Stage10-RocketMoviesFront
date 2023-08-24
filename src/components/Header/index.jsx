import { Container, Profile } from './styles';

import { useAuthProvider } from '../../hooks/auth';

import { useNavigate, Link } from 'react-router-dom';

import { Input } from '../../components/Input';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header({onChange}) {
  const { signOut, user } = useAuthProvider();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  async function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Link to="/">
        RocketMovies
      </Link>

      <Input 
        type="text"
        placeholder="Pesquisar pelo título"
        onChange={onChange}
      />
      
      <div id="profile">
        <div>
          <span>{user.name}</span>
          <button type="button" onClick={handleSignOut}>sair</button>
        </div>
          
        <Profile to="/profile">
          <img
            src={avatarUrl}
            alt="Foto do usuário"
          />
        </Profile>
      </div>

    </Container>
  );
}