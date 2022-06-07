import styles from "../styles/Navbar.module.css";
function Navbar() {

  return (
    <div className={styles.search}>
      <input
        value=''
        placeholder="Search for foods"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/651/651111.png"
        alt="search"
        onClick={() => searchFood()}
      />
    </div>
  );
}
export default Navbar;
