import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeDetails from "./pages/HomeDetails/HomeDetails";
import Listing from "./pages/Listing/Listing";
import Main from "./pages/Main/Main";
import Propertys from "./pages/Propertys/Propertys";
import Subscribe from "./pages/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="propertys" element={<Propertys />} />
        <Route path="listing" element={<Listing />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="homeDetails" element={<HomeDetails />} />
      </Routes>
    </>
  );
}

export default App;
