import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/ContactComponent.module.css';
function ContactComponent() {
  return (
    <div className={styles.contactContainerBg}>
      <Container className={styles.contactComponent}>
        <Row>
          <Col xs={12} md={6} className={styles.Col1}>
            <h1>FOODO</h1>
            <p className={styles.p}>
             We are now also available on others social media platforms. Follow us , Mention us and stay connected with us.
            </p>
            <div className={styles.icons}>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-linkedin-square"></span>
            </div>
          </Col>
            <Col xs={12} md={3} className={styles.Col}>
              <b>Links</b>
              <br />
              <br />
              <h6>Overview</h6>
              <h6>Social Media</h6>
              <h6>Contact</h6>
            </Col>
            <Col xs={12} md={3} className={styles.Col}>
              <b>Company</b>
              <br />
              <br />
              <h6>Overview</h6>
              <h6>Social Media</h6>
              <h6>Contact</h6>
             
        </Col>
      </Row>
      <Container className={styles.imgDownload}>
          <img
            src="https://i.postimg.cc/cLX3s3kK/playlogo.jpg"
            className={styles.imgFluid1}
          />
          <img
            src="https://i.postimg.cc/YS6JGpgm/apple-app-store-logo.jpg"
            className={styles.imgFluid}
          />
        </Container>
    </Container>
    </div >
  );
}

export default ContactComponent;
