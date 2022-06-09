//importing necessary modules.
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const url = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=89cbc4502b0f0e061ee215b4cd527d58"
      )
      .then((data) => {
        setMovies(data.data.results);
        // console.log(data.data.results)
      });
  });
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map(
            (
              movie //maps through movies and gives movies corresponding to each id
            ) => (
              <Wrap key={movie.id}>
                <Link to={`/detail/${movie.id}`}>
                  <img src={`${url}/${movie.poster_path}`} alt={movie.title} />
                </Link>
              </Wrap>
            )
          )}
      </Content>
    </Container>
  );
}

export default Movies;

// Styling each JSX elements using styled components
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 695) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
  }
`;
