import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import {productsInitial} from "./ProductsInitial"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { bebidas } = useParams();

    useEffect(() => {
        setLoading(true);
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                if (bebidas != undefined) {
                    const productsFiltered = productsInitial.filter(product => product.bebidas === bebidas)
                    setProducts(productsFiltered)
                } else {
                    setProducts(productsInitial);
                }
            })
            .catch((rej) => {
                toast.error("Error al cargar los productos");
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [bebidas])


    return (
        <div id="ItemContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Cargando, por favor espere...</h2></div> : <ItemList products={products} />}
            {error ? <h2>Error al intentar cargar la página, inténtelo nuevamente...</h2> : null}
        </div >
    )
}

export default ItemListContainer