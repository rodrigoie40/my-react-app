import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import BackToTop from "./BackToTop";
import Cart from "./Cart";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    return (
        <>
            <main>
                <BackToTop />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:slug" element={<ItemDetailContainer />} />
                </Routes>
                <ToastContainer position="bottom-right" />
            </main>
        </>
    )
}

export default Main