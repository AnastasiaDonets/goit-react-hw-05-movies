import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeContainer,
  TrendTitle,
  TrendList,
  TrendMovie,
} from './Home.styled';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMoviesTrending);
  }, []);

  return (
    <HomeContainer>
      <TrendTitle>Trending today</TrendTitle>
      <TrendList>
        {moviesTrending.map(movie => (
          <TrendMovie key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </NavLink>
          </TrendMovie>
        ))}
      </TrendList>
    </HomeContainer>
  );
};
