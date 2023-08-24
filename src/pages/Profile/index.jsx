import { Link } from 'react-router-dom';
import { Container, Header, Form, Avatar } from './styles';

import { useState, useEffect } from 'react';
import { useAuthProvider } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from 'react-icons/fi'

export function Profile() {
  const { user, updateProfile } = useAuthProvider();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [old_password, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleSave() {
    const updated = { 
      name,
      email,
      password: newPassword,
      old_password: old_password
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile });
  };

  async function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);
    
    const avatarPreview = URL.createObjectURL(file)

    setAvatar(avatarPreview)
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </Header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Avatar" />

          <label htmlFor="avatarInput">
            <FiCamera />

            <input
              id="avatarInput"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          icon={FiUser}
          type="text"
          className="whiteText"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          icon={FiMail}
          type="text"
          value={email}
          className="whiteText"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button
          type="button"
          title="Salvar"
          onClick={handleSave}
        />
      </Form>
    </Container>
  );
}