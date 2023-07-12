import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type/:banana/:iceCream/:test" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
