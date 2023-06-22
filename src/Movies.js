import React from "react";
import { useGlobalContext } from "./Context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <div>
      {movie.map((currentMovie) => {
        return (
          <>
            <h2>{currentMovie.Title}</h2>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
