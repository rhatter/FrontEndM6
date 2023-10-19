import React from "react";
import { useState, useEffect } from "react";
import "./SingleArticle.css";

function SingleArticle({ post }) {
  useEffect(() => {
    console.log("dati", post);
  }, []);

  return (
    <div className="cardArea">
      <div className="Card">
        <div className="CardImageArea">
          <div className="CardImage">
            <img src={post.cover} alt="" className="Immagine" />
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
          <div className="categoryArea">{post.category}</div>
        </div>
      </div>
    </div>
  );
}
export default SingleArticle;
