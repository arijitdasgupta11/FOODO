import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/TopContainer.module.css';
function TopContainer() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.texture}>
        <Container className={styles.containerTop}>
          <Row className={styles.sectionTop}>
              <img className={styles.imgFluid1} src="/assets/mobile.png" />
            <Col xs={12} md={6} className={styles.sectionTopRight} shadow>
              {/* <div className={styles.plateImgContainer}>
                <img
                  className={styles.plateImg}
                  src="/assets/plate-two.png"
                />
                <img
                  className={styles.plateImg}
                  src="/assets/plate-three.png"
                />
              </div> */}
              <h6>DOWNLOAD NOW!</h6>
              <h2>Get Your Food In</h2>
              <h1>FOODO</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button className={styles.btnCustom}>Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopContainer;
