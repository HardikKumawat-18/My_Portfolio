import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProjectInfo } from "./pages";
import { Carousel, WithoutURL, WithURL } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithURL />}>
            <Route index path="/" element={<Home />} />
          </Route>
          <Route element={<WithoutURL />}>
            <Route path="/project/:id" element={<ProjectInfo />} />
            <Route path="/carousel" element={<Carousel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
