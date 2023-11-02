import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationCom from "./PaginationComponent.js";

function MoviesList({ allMovie, getPage, totalPage }) {
  return (
    <Row>
      {allMovie.length >= 1 ? (
        allMovie.map((mov) => <CardMovie key={mov.id} mov={mov} />)
      ) : (
        <h2>لايوجد افلام الان </h2>
      )}
      <PaginationCom getPage={getPage} totalPage={totalPage} />
    </Row>
  );
}

export default MoviesList;
