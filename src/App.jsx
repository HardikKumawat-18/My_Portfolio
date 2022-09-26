import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProjectTemplate1, ProjectTemplate2 } from "./pages";
import { WithoutURL, WithURL } from "./components";

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
              <Route path="ui-ux/:id" element={<ProjectTemplate1 />} />
              <Route
                path="interaction-motion/:id"
                element={<ProjectTemplate2 />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
