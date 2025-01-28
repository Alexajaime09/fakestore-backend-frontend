import Store from "./StorePage.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
