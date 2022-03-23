import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import BackToTop from "./BackToTop";
import Cart from "../components/Cart";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    return (
        <>
        <BackToTop />
            <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/bebidas/:analcoholicas" element={<ItemListContainer />} />
                    <Route path="/bebidas/:bebidasSinAlcohol" element={<ItemListContainer />} />
                    <Route path="/bebidas/:Energizantes" element={<ItemListContainer />} />
                    <Route path="/cart/" element={<Cart />} />
                    <Route path="/item/:slug" element={<ItemDetailContainer />} />
                </Routes>
                <ToastContainer position="bottom-right" />
            </main>
        </>
    )
}

export default Main