import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.scss";
import "./global.scss";

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}

export default App;
