
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import ListaPost from "./Pages/ListaPost"
import Chisiamo from "./Pages/Chisiamo"
import SinglePost from "./Pages/SinglePost";
import Layout from "./layouts/Layout"
import { GlobalProvider } from "./contexts/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Chisiamo" element={<Chisiamo />} />
            <Route path="/Listapost" element={<ListaPost />} />
            <Route path="/post/:id" element={<SinglePost />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
