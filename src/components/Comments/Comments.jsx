import React from "react";
import Comment from "../Comment/Comment";
import "./Comments.css";
import { Col } from "react-bootstrap";

function Comments() {
  return (
    <div className="commentArea">
      <div className="commentBackground"></div>
      <Col xs={12} md={10} lg={9} xl={7} xxl={5} className="">
        <Comment />
      </Col>
    </div>
  );
}

export default Comments;
