import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { WithoutURL, WithURL } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithURL />}>
            <Route index path="/" element={<Home />} />
          </Route>
          <Route element={<WithoutURL />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
