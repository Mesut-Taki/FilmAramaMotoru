import React from "react";
import MovieDetails from "../components/common/DiscoverMovieDetay";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosUndo } from "react-icons/io";

const DetailPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="conteinerBtn">
        <button className="returnBtn" onClick={returnBack}>
          <IoIosUndo /> &nbsp; Geri
        </button>
      </div>
      <MovieDetails movieId={movieId} />
    </>
  );
};

export default DetailPage;
