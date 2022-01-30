import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Discover = ({
  title,
  poster_path,
  vote_average,
  first_air_date,
  original_name,
}) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movieInfo">
        <h4 className="h4title">{title}</h4>
        <span>{vote_average} </span>
        <span>{first_air_date} </span>
        <span>{original_name} </span>
      </div>
    </div>
  );
};

export default Discover;
