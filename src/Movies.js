import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currentMovie) => {
            const { imdbID, Title, Poster } = currentMovie;

            // This is for fixed number of string of movie title 
            const movieName = Title.substring(0, 15);

            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    {/* <h2>{Title}</h2> */}
                    <h2>{movieName.length >=15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt="" srcSet="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
