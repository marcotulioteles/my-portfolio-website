import { Sidebar } from "./components/Sidebar";

import "./global.scss";
import { Home } from "./pages/Home";
import { ProfessionalExperience } from "./pages/ProfessionalExperience";
import { Portfolio } from "./pages/Portfolio";
import { ContactMe } from "./pages/ContactMe";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
