import Login from "./components/Login";
import Home from "./container/Home";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
