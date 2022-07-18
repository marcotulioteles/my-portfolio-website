import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { ContactMe } from "./pages/ContactMe";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { ProfessionalExperience } from "./pages/ProfessionalExperience";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<ProfessionalExperience />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<ContactMe />}/>
      </Route>
    </Routes>
  )
}