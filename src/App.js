import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import Propertys from "./pages/Propertys/Propertys";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="propertys" element={<Propertys />} />
      </Routes>
    </>
  );
}

export default App;
