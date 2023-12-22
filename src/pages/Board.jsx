import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export const Board = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      let res = axios({
        url: `http://192.168.211.189:8090/api/posts`,
      })
        .then((response) => {
          let res = response.data;
          setPosts(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onClickHandler = (e) => {
    navigate("/makeBoardPage");
  };

  return (
    <div>
      <Button style={{ marginLeft: "450px" }} onClick={onClickHandler}>
        글 만들기
      </Button>
      <h2 style={{ textAlign: "center" }}>게시판</h2>
      <div className="post-list">
        {posts.map((post) => (
          <Link to={`/board/${post.id}`}>
            <div
              key={post.id}
              className="post-item"
              onClick={() => {
                alert("해당 게시글을 보기 위해서는 10 point가 차감됩니다.");
              }}
            >
              <h3 className="post-item-title">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Board;
