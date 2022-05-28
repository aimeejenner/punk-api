import styles from  './App.module.scss';

import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {

  return (
    <section className={styles.app}>
      <Navbar />
      <Main />
    </section>
  );
}

export default App;
