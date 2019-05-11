import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const BookCard = props => {
  let cover = require("../image/BookCover.png");
  if (props.book.volumeInfo.imageLinks) {
    cover = props.book.volumeInfo.imageLinks.thumbnail;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={cover}
        alt=""
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/books/${props.book.id}`}>
            {props.book.volumeInfo.title}
          </Link>
        </Card.Title>
        <Card.Text>{props.book.volumeInfo.authors}</Card.Text>
      </Card.Body>
    </Card>
    // <div className="card-style">
    //   <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="" />
    //   <div>
    //     <div>
    //       <Link to={`/books/${props.book.id}`}>
    //         {props.book.volumeInfo.title}
    //       </Link>

    //     </div>
    //   </div>
    // </div>
    ///* <Button variant="primary">Go somewhere</Button> */
  );
};

export default BookCard;