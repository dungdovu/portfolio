import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiJupyter,
    SiAnaconda, SiMicrosoft, SiTableau,SiLatex
} from "react-icons/si";
import {GrHadoop, GrDocker} from "react-icons/all";
import {
    DiIntellij, DiAtlassian,   DiGoogleCloudPlatform, DiMongodb
} from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLatex />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiAtlassian />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <GrHadoop />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <GrDocker />
        </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTableau />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGoogleCloudPlatform />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
        </Col>
    </Row>
  );
}

export default Toolstack;
