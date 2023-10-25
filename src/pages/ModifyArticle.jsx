import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";
import "./ModifyArticle.css";
import axios from "axios";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ModifyArticle = () => {
  const [thisPost, setThisPost] = useState({});
  const [sendable, setSendable] = useState(false);
  const [formData, setFormData] = useState({});
  const [registerError, setRegisterError] = useState(null);
  const [image, setImage] = useState(null);
  const { articleID } = useParams();

  const getArticleById = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/post/byid/${articleID}`
      );
      setThisPost(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticleById();
  }, []);

  useEffect(() => {
    if (formData.title && formData.content && formData.rate && formData.role) {
      setSendable(true);
    } else {
      setSendable(false);
    }
  }, [formData]);
  const uploadFile = async (cover) => {
    const fileData = new FormData();
    fileData.append("cover", cover);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/posts/cloudUpload`,
        fileData
      );
      return response;
    } catch (error) {
      console.log(error, "errore in upload file");
    }
  };
  const navigate = useNavigate();
  const renderRegisterError = () => {
    return (
      <div>
        <span>{registerError}</span>
      </div>
    );
  };
  const postUser = async (e) => {
    e.preventDefault();
    let finalBody = { ...formData };
    try {
      if (image) {
        const uploadCover = await uploadFile(image);
        finalBody = {
          ...finalBody,
          usrImg: uploadCover.data.cover,
        };
      }
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/users/create`,
        finalBody
      );
      console.log(jwt_decode(response.data.token));
      localStorage.setItem(
        "userLocalData",
        JSON.stringify(jwt_decode(response.data.token))
      );
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
      return response;
    } catch (error) {
      setRegisterError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  async function getBooks() {
    const post = await axios.get(
      `${process.env.REACT_APP_URL}/posts/byid/${articleID}`
    );
    setThisPost(post.data.post);
  }
  useEffect(() => {
    getBooks();
  }, []);

  const formDataImport = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  //devo chiamare il singolo post
  return (
    <>
      <MyNavBar />
      <div className="modifyArticlePage">
        <div className="commentArea">
          <div className="formArea">
            <form action="" encType="multipart/form-data" onSubmit={postUser}>
              <div className="titleArea">
                <span>Inizia a viaggiare il mondo intorno a te</span>
              </div>

              <div className="inputArea">
                <textarea
                  type="text"
                  placeholder="title"
                  name="title"
                  onChange={formDataImport}
                >
                  {}
                </textarea>
              </div>

              <div className="inputArea">
                <label class="custom-file-upload">
                  <input
                    type="file"
                    placeholder="Immagine profilo"
                    name="cover"
                    onChange={onChangeImage}
                  />
                  Immagine profilo
                </label>
              </div>
              {registerError && renderRegisterError()}
              <button
                type="submit"
                className={sendable ? "sendable" : "unsendable"}
              >
                Registrati
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyArticle;
