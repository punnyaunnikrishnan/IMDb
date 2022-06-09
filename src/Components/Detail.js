//importing necessary modules
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
//importing icons used.
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import { MdGroups } from "react-icons/md";

function Detail() {
  const { id } = useParams(); //Returns an object of id
  const [movie, setMovie] = useState({});
  const url = "https://image.tmdb.org/t/p/w300";
  console.log(id);
  useEffect(() => {
    //fetch movie informations using api.
    axios
      .get(
        //according to unique id's movies will be fetched.
        `https://api.themoviedb.org/3/movie/${id}?api_key=89cbc4502b0f0e061ee215b4cd527d58`
      )
      .then((data) => {
        setMovie(data.data);
        console.log(data.data);
      });
  }, [id]); //call back is given as id, This is component update cycle.
  return (
    <Container>
      {movie && (
        <>
          <Background>
            {/* background of details page is choosed */}
            <img src={`${url}/${movie.backdrop_path}`} alt={movie.title} />
          </Background>
          <ImageTitle>
            {/* image title is accessed */}
            <img src={`${url}/${movie.poster_path}`} alt={movie.title} />
          </ImageTitle>
          <br></br>
          <Controls>
            <PlayButton>
              <PlayArrowIcon />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <PlayArrowIcon />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <MdGroups />
            </GroupWatchButton>
          </Controls>
          {/* subtitle and description of movie is also fetched  */}
          <SubTitle>{movie.original_title}</SubTitle>
          <Description>{movie.overview}</Description>
          <Rating>
            <b>
              {/* ratings corresponding to each movie is accessed */}
              {movie.vote_average} <StarIcon />
            </b>
          </Rating>
        </>
      )}
    </Container>
  );
}

// Styling each JSX elements using styled components
export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw+5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    ob
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;
  margin-left: -100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-left: 90px;
`;
const PlayButton = styled.button`
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
  color: white;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 30px;
  min-height: 20px;
  margin-top: 26px;
  margin-left: 90px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 17px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 500px;
  margin-left: 90px;
`;
const Rating = styled.div`
  margin-left: 90px;
  align-items: center;
`;
