import { Sidebar } from "./components/Sidebar";

import "./global.scss";
import { Home } from "./components/Home";
import { ProfessionalExperience } from "./components/ProfessionalExperience";

function App() {
  return (
    <>
      <Sidebar />
      <ProfessionalExperience />
    </>
  );
}

export default App;
