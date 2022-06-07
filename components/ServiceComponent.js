import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Service.module.css';
function ServiceComponent() {
  return (
    <div className={styles.serviceContainerBg}>
      <Container className={styles.serviceContainer}>
      <h1>SERVICES</h1>

        <Row>
          <Col xs={9} md={3} className={styles.col}>
            <img src="assets/image-one.png" className={styles.imgFluid}/>
            <h2>Best Offer In Town</h2>
            {/* <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p> */}
          </Col>
          <Col xs={9} md={3} className={styles.col}>
            <img src="assets/image-two.png" className={styles.imgFluid}/>
            <h2>Fast Delivery</h2>
            {/* <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p> */}
          </Col>
          <Col xs={9} md={3} className={styles.col}>
            <img
              src="assets/image-three.png"
              className={styles.imgFluid}
            />
            <h2>Quality Food</h2>
            {/* <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComponent;
