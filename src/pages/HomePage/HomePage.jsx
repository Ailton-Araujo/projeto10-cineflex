import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMovies } from "../../components/axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
     getMovies(setMovies);
  }, []);
  console.log(movies);
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((movie) => {
          return (
            <MovieContainer key={movie.id}>
              <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt={movie.title} />
              </Link>
            </MovieContainer>
          );
        })}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;