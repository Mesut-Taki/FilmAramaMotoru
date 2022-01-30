import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DiscoverDetailPage";
import LoginPage from "../pages/LoginPage";
import NowPlayingMoviesPage from "../pages/NowPlayingMoviesPage";
import PopularMoviesPage from "../pages/PopulerMoviesPage";
import SearchPage from "../pages/SearchPage";
import SimilarMoviesPage from "../pages/SimilarMoviesPage";
import PrivateRoute from "./PrivateRoute";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path="/movie/:movieId"
        element={
          <PrivateRoute>
            <DetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/aile"
        element={
          <PrivateRoute>
            <PopularMoviesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/animasyon"
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/komedi"
        element={
          <PrivateRoute>
            <SimilarMoviesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dizi"
        element={
          <PrivateRoute>
            <NowPlayingMoviesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/aksiyon"
        element={
          <PrivateRoute>
            <SearchPage />
          </PrivateRoute>
        }
      />

      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default CustomRoutes;
