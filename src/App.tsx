import { Sidebar } from "./components/Sidebar";

import "./global.scss";
import { Home } from "./components/Home";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
      <Sidebar />
      {/* <Home /> */}
      {/* <ProfessionalExperience /> */}
      <Portfolio />
    </>
  );
}

export default App;
