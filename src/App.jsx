import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import Botones from "./components/Botones";
import ItemDetail from "./components/ItemDetail";





function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element= {<ItemListContainer />} />
    <Route path={"/categoria/:id"} element= {<ItemListContainer />} />
    <Route path= {"/*"} element= {<Error404 />} />
    </Routes>
    <Botones />
    <Footer />
    </BrowserRouter>
    
  )
}
export default App;
