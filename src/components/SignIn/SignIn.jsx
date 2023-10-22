import React from "react";
import "./SignIn.css";
import backImg from "../../img/signin.jpg";
import { Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [password, setPassword] = useState(null);
  const [passwordControl, setPasswordControl] = useState(false);
  const [passwordCompiled, setPasswordCompiled] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const formDataImport = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const modifiedPassword = (e) => {
    setPassword(e.target.value);
    e.target.value === passwordCompiled
      ? setPasswordControl(true)
      : setPasswordControl(false);
  };
  const controlPassword = (e) => {
    setPasswordCompiled(e.target.value);
    e.target.value === password
      ? setPasswordControl(true)
      : setPasswordControl(false);
  };
  const render = () => {
    return (
      <div className="errorPassword">
        <span>ATTENZIONE LE PASSWORD NON SONO UGUALI</span>
      </div>
    );
  };

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
  const postUser = async (e) => {
    e.preventDefault();
    if (image) {
      try {
        const uploadCover = await uploadFile(image);
        const finalBody = {
          ...formData,
          usrImg: uploadCover.data.cover,
        };
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
        console.log(error);
      }
    }
  };

  return (
    <div className="formPage">
      <Col xs={12} sm={8} md={6} lg={4} xl={4} className="column">
        <div className="preFormArea">
          <div></div>
          <div className="formArea">
            <form action="" encType="multipart/form-data" onSubmit={postUser}>
              <div className="titleArea">
                <span>Inizia a viaggiare il mondo intorno a te</span>
              </div>

              <div className="inputArea">
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  name="name"
                  onChange={formDataImport}
                />
              </div>
              <div className="inputArea">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={formDataImport}
                />
              </div>
              <div className="inputArea">
                <input
                  type="text"
                  id="t1"
                  name="role"
                  list="l1"
                  required
                  pattern="[Cc]reator|[Uu]tente"
                  placeholder="Tipo di utente"
                  onChange={formDataImport}
                ></input>
                <datalist id="l1">
                  <option>Creator</option>
                  <option>Utente</option>
                </datalist>
              </div>
              <div className="inputArea">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    modifiedPassword(e);
                    formDataImport(e);
                  }}
                  name="password"
                />
              </div>
              <div className="inputArea">
                <input
                  type="password"
                  placeholder="Ripeti password"
                  onChange={controlPassword}
                />
              </div>
              {passwordCompiled && !passwordControl && render()}
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
              <button type="submit">Registrati</button>
            </form>
          </div>
          <button className="registrati">Accedi</button>
        </div>
      </Col>
      <div
        className="imageArea"
        style={{ backgroundImage: `url(${backImg})` }}
      ></div>
    </div>
  );
}

export default SignIn;
