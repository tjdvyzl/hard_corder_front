import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

export default function BoardDetailPage() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const postId = useParams().id;

  useEffect(() => {
    try {
      let res = axios({
        url: `http://192.168.211.189:8090/api/posts/${postId}`,
      })
        .then((response) => {
          let res = response.data;
          setTitle(res.title);
          let new_array = res.content.split("!");
          setContents(new_array);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Card border="light" style={{ width: "60rem" }}>
        <Card.Body>
          <Card.Title
            style={{
              margin: "50px 10px",
              height: "4em",
              fontSize: "3rem",
              border: "3px solid white",
            }}
          >
            {title}
          </Card.Title>
          <div>
            {contents &&
              contents.map((content, idx) => {
                return (
                  <Card.Text
                    key={idx}
                    style={{
                      border: "1px solid white",
                      height: "5em",
                      fontSize: "2rem",
                      margin: "10px",
                    }}
                  >
                    {content}
                  </Card.Text>
                );
              })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
