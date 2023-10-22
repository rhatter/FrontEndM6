import React from "react";
import { useState, useEffect } from "react";
import "./SingleArticle.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function SingleArticle({ post }) {
  useEffect(() => {
    console.log("dati", post);
  }, []);

  return (
    <Col className="cardArea" sm={12} lg={12} xl={6}>
      <div className="Card">
        <div className="CardImageArea">
          <div className="CardImage">
            <Link to={`/book/${post._id}`}>
              <img src={post.cover} alt="" className="Immagine" />
            </Link>
          </div>
        </div>
        <div className="CardTextArea">
          <div className="TitleArea">
            <p className="title">{post.title}</p>
          </div>
          <div className="ContentArea">
            <p className="content">{post.content}</p>
          </div>
          <div className="ReadTimeArea">
            <span className="Author">{post.author}</span>
            <span className="ReadTime">
              {post.readTime.value} {post.readTime.unit}
            </span>
          </div>
          <div className="categoryArea">
            <span className="category">{post.category}</span>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default SingleArticle;
