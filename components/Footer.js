import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Footer.module.css';
function Footer() {
  return (
<footer className={styles.footer}>
        <h5><span className={styles.span1}>F</span><span className={styles.span2}>O</span><span className={styles.span1}>O</span><span className={styles.span2}>D</span><span className={styles.span1}>O</span><span className={styles.span2}></span>  <span className={styles.span3}>&copy;</span> <span className={styles.span1}>A</span><span className={styles.span2}>R</span><span className={styles.span1}>I</span><span className={styles.span2}>J</span><span className={styles.span1}>I</span><span className={styles.span2}>T</span></h5>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
      </footer>
    );
}
export default Footer;