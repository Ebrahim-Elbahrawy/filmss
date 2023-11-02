import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      {mov.backdrop_path ? (
        <Link to={`/movie/${mov.id}`}>
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
              className="card__image"
              alt="hu"
            />
            {/* {mov.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
              className="card__image"
              alt="hu"
            />
          ) : (
            <img
              src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=996&t=st=1682225022~exp=1682225622~hmac=ac42ef6627a67e42efeff70f1862e126dea3c43bbbf951822b019036a53c3609"
              alt="NOT FOUND"
              className="card__image"
            />
          )} */}
            <div className="card__overlay">
              <div className="overlay__text text-center w-100 p-2">
                <p>اسم الفيلم :{mov.original_title}</p>
                <p>تاريخ الاصدار:{mov.release_date}</p>
                <p>عدد المقيمين: {mov.vote_count}</p>
                <p>التقييم:{mov.vote_average} </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <img
          src="https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=996&t=st=1682225022~exp=1682225622~hmac=ac42ef6627a67e42efeff70f1862e126dea3c43bbbf951822b019036a53c3609"
          alt="NOT FOUND"
          className="card__image"
        />
      )}
    </Col>
  );
};

export default CardMovie;
