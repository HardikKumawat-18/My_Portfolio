import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProjectTemplate1, ProjectTemplate2 } from "./pages";
import {
  Loading,
  NotFound,
  PrototypeDesktopCarousel,
  WithoutURL,
  WithURL,
} from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithURL />}>
            <Route index path="/" element={<Home />} />
          </Route>
          <Route element={<WithoutURL />}>
            <Route path="project">
              <Route path="ui-ux/:projectName" element={<ProjectTemplate1 />} />
              <Route
                path="interaction-motion/:projectName"
                element={<ProjectTemplate2 />}
              />
            </Route>
          </Route>
          <Route path="/loading" element={<Loading />} />
          <Route path="/carousel" element={<PrototypeDesktopCarousel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
