import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import Home from "./pages/home";
import Layout from "./layout";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
