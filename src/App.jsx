import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import Checkout from "./components/Checkout";





function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path={"/"} element= {<ItemListContainer />} />
    <Route path={"/categoria/:id"} element= {<ItemListContainer />} />
    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
    <Route path={"/cart"} element={<Cart />} />
    <Route path={"/checkout"} element={<Checkout />} />
    <Route path= {"*"} element= {<Error404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContextProvider>
  )
}
export default App;
