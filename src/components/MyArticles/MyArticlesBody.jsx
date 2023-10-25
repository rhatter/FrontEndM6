import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import { useParams } from "react-router-dom";
import SingleArticle from "../SigleArticle/SingleArticle";
import "./MyArticleBody.css";
import { Link } from "react-router-dom";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyArticlesBody = () => {
  const [articles, setArticle] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userLocalData"));
  const { userID } = useParams();
  const getArticles = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_URL}/post/byAuthor/6537d37346e5ca6629f1d7b9` //`${process.env.REACT_APP_URL}/post/byAuthor/${userID}`
      );
      setArticle(result.data.payload);
      console.log(result.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const renderSingleArticle = () => {
    return articles.map((article) => <SingleArticle post={article} />);
  };
  console.log(renderSingleArticle());

  const toPrompt = articles.map((e) => {
    return {
      author: e.author.name,
      title: e.title,
      content: e.content,
      cover: e.cover,
      _id: e._id,
      readTime: { unit: e.readTime.unit, value: e.readTime.value },
      category: e.category,
      rate: e.rate,
    };
  });
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="MyArticleBack"></div>
      <div className="MyArticlePage">
        <div className="ArticleArea">
          <Col xs={12} sm={12} md={10}>
            {articles.map((e) => (
              <div>
                <SingleArticle post={e} modify={true} articleID={e._id} />
              </div>
            ))}
          </Col>
        </div>
      </div>
    </>
  );
};

export default MyArticlesBody;
