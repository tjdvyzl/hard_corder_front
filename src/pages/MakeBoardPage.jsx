import React from "react";
import Card from "react-bootstrap/Card";

export default function makeBoardPage() {
  return (
    <div>
      <Card border="light" style={{ width: "60rem" }}>
        <Card.Body>
          <Card.Title
            style={{
              margin: "0 0 70px 0px",
              height: "5em",
              fontSize: "2rem",
              border: "3px solid white",
            }}
          ></Card.Title>
          <Card.Text
            style={{
              margin: "0 0 100px 0px",
              height: "5em",
              fontSize: "3rem",
            }}
          >
            <div style={{ border: "3px solid white" }}></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
