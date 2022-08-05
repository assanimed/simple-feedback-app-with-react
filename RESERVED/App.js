import { Route, Routes } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";

import Secret from "./Component/Secret.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <>
            <Home />
            <p>Hello world</p>
          </>
        }
      />
      <Route path="/about" exact element={<About />} />
      <Route path="/auth" exact element={<Secret auth={true} />} />
    </Routes>
  );
}

export default App;
