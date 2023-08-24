import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {email, password});
      const { user, token } = response.data;

      delete user.password;
      
      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({user, token});
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      } 
    }
  }

  async function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    if(avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);

      const response = await api.patch("/users/avatar", fileUploadForm);
      user.avatar = response.data.avatar;
    }

    try {
      await api.put("/users", user);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token});
      alert("Perfil atualizado com sucesso!")
    } catch(e) {
      if(e.response) {
        alert(e.response.data.message)
      } else {
        alert("Não foi possível atualizar o usuário.")
      } 
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    if(user && token) {
      setData({
        user: JSON.parse(user),
        token
      });
    };

  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        user: data.user,
        signOut,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuthProvider() {
  const context = useContext(AuthContext);

  return context;
};

export {
  AuthProvider,
  useAuthProvider
}