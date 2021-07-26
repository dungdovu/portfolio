import React from "react";
import Card from "react-bootstrap/Card";
import {BiLinkExternal} from "react-icons/bi";
import Button from "react-bootstrap/Button";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
            <Button variant="primary" href={props.link} target="_blank">
                <BiLinkExternal /> &nbsp;
                {props.isBlog ? "View Blog" : "View Reference"}
            </Button>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
