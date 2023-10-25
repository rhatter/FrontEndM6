import React from "react";
import MyNavBar from "../components/NavBar/NavBar";
import MyArticlesBody from "../components/MyArticles/MyArticlesBody";

import ButtonNew from "../components/ButtonNew/ButtonNew";
import NewArticle from "../components/NewArticle/NewArticle";
import { useState } from "react";

function MyArticles() {
  const [commenting, setCommenting] = useState(false);
  return (
    <>
      <div className="myArticlePage">
        <MyNavBar />
        <ButtonNew
          state={{ commenting: commenting, setCommenting: setCommenting }}
        />
        <NewArticle
          state={{ commenting: commenting, setCommenting: setCommenting }}
        />
        <MyArticlesBody />
      </div>
    </>
  );
}

export default MyArticles;
