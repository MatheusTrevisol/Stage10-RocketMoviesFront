import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { NewMovie } from '../pages/NewMovie';
import { UpdateMovie } from '../pages/UpdateMovie';
import { Movie } from '../pages/Movie';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register-movie" element={<NewMovie />} />
      <Route path="/update-movie/:id" element={<UpdateMovie />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}