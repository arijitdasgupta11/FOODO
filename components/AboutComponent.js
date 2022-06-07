import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/AboutComponent.module.css';
function AboutComponent() {
  return (
    <div className={styles.aboutContainerBg}>
      <Container>
      <h1 className={styles.h1}>ABOUT US</h1>

        <Row>
          <Col xs={12} md={6}>
            <img src="assets/image-about.png" className={styles.imgFluid} />
          </Col>
          <Col xs={12} md={6} className={styles.aboutDetails}>
            <div >
              <div className={styles.aboutContent}>
                <img src="assets/plate-two.png" className={styles.imgFluid2} />
                <h2 className={styles.h2}>Best Offer In Town</h2>
                <b className={styles.b}>Lorem ipsum, or lipsum as it is sometimes known as real</b>
                <br />
                <br />
                <p className={styles.p}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage is
                  attributed to an unknown typesetter in the 15th century who is
                  thought to have scrambled parts of Cicero's De Finibus Bonorum
                  et Malorum for use in a type specimen book.
                </p>
              <button className={styles.btnCustom}>Explore More</button>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
