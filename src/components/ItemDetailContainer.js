import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";
import { productsInitial } from "./ProductsInitial"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [object, setObject] = useState([]);
    const { slug } = useParams();


    useEffect(() => {
        setLoading(true);
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                var result = productsInitial.find(product => {
                    return product.slug === slug;
                })
                setObject(result);
            })
            .catch((rej) => {
                toast.error("Error al cargar los productos");
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])




    return (
        <div id="ItemContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Cargando... por favor espere</h2></div> : <ItemDetail object={object} />}
            {error ? <h2>Error al intentar cargar la página, por favor intenta nuevamente...</h2> : null}
        </div >
    )
}

export default ItemDetailContainer