import { Sidebar } from "./components/Sidebar";

import "./global.scss";
import { Home } from "./pages/Home";
import { ProfessionalExperience } from "./pages/ProfessionalExperience";
import { Portfolio } from "./pages/Portfolio";
import { ContactMe } from "./pages/ContactMe";

function App() {
  return (
    <>
      <Sidebar />
      {/* <Home /> */}
      {/* <ProfessionalExperience /> */}
      {/* <Portfolio /> */}
      <ContactMe />
    </>
  );
}

export default App;
