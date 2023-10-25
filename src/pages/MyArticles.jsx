import React from "react";
import MyNavBar from "../components/NavBar/NavBar";
import MyArticlesBody from "../components/MyArticles/MyArticlesBody";

function MyArticles() {
  return (
    <>
      <div className="myArticlePage">
        <MyNavBar />
        <MyArticlesBody />
      </div>
    </>
  );
}

export default MyArticles;
