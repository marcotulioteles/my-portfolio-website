import { Header } from "./components/Header";

import styles from "./App.module.scss";
import "./global.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
