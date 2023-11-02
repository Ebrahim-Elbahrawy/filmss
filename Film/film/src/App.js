import "./App.css";
import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Reducer from "./components/Reducer";

function App() {
  const [allMovie, setAllMovie] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const getAllMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a57cba35b5efa9068c0c9c0ed6e5f0e0&language=ar`
    );
    setAllMovie(res.data.results);
    setTotalPage(res.data.total_pages);
  };
  // get page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a57cba35b5efa9068c0c9c0ed6e5f0e0&language=ar&page=${page}`
    );
    setAllMovie(res.data.results);
    setTotalPage(res.data.total_pages);
  };
  const search = async (word) => {
    if (word === "") {
      await getAllMovie();
    } else {
      const res = await axios.get(`
      https://api.themoviedb.org/3/search/movie?api_key=a57cba35b5efa9068c0c9c0ed6e5f0e0&query=${word}&language=ar
   `);
      setAllMovie(res.data.results);
      setTotalPage(res.data.total_pages);
    }
  };
  useEffect(() => {
    getAllMovie();
  }, []);
  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  allMovie={allMovie}
                  getPage={getPage}
                  totalPage={totalPage}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
        <Reducer></Reducer>
      </Container>
    </div>
  );
}

export default App;
