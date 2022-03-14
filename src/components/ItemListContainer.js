import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';




export let productsInitial = [
    { id: 1, slug: "gaseosaCocacola" , name: "Coca-cola 2.5 Lts", img: "https://jumboargentina.vtexassets.com/arquivos/ids/666704/Coca-cola-Sabor-Original-1-5-Lt-2-245092.jpg?v=637674357676600000", price: 230, stock: 10, description: "Nada supera el sabor de una Coca-Cola. Diseñado para acompañar cada momento, el sabor de la Coca-Cola es unclásico que perdura desde hace más de 130 años. Deliciosa y refrescante" },
    { id: 2, slug: "gaseosaPepsi" , name: "Pepsi 2.25 Lts", img: "https://superlago.com.ar/wp-content/uploads/2021/01/7791813555056.jpg", price: 190 , stock: 10,  description: "descripcion general de Pepsi" },
    { id: 3, slug:"gaseosaPritty" , name: "Pritty", img: "https://walmartar.vteximg.com.br/arquivos/ids/862971-1000-1000/Gaseosa-Limon--Pritty-500-Cc-1-23070.jpg?v=637243202625570000", price: 85, stock: 2, description: "descripcion general de pritty"  },
    { id: 4, slug:"gaseosaFanta", name: "Fanta 2.25 Lts", img: "https://depotexpress.com.ar/tienda/wp-content/uploads/2020/06/FANTA-NARANJA-2.25.png", price: 230, stock: 15 ,  description: "Fanta te invita a que descubras y pruebes cual es tu verdadero sabor.Fanta es una gaseosa frutal, rica, indulgente y divertida que te entrega una experiencia sensorial increíble con su sabor, aroma, burbujas y colores vibrantes. Fanta te invita convertir la rutina en momentos de diversión y por ello es ideal para esos momentos que buscas sabores diferente, cuando estas solo, con amigos o familia, acompañar tus comidas y tomar y comer algo rápido y rico." },
    { id: 5, slug:"gaseosaManaos" ,name: "Manaos", img: "https://www.madacilo.com.ar/7160-thickbox_default/gaseosa-manaos-cola-6x2250cc.jpg", price: 100, stock: 10 ,  description: "descripcion general de manaos cola"},
    { id: 6,slug:"vodkaSmirnoff" , name: "Smirnoff 700 Ml", img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/901/459/products/smirnoff-700ml1-e3af2e4b45a072d60c16363273732959-640-0.jpg", price: 100, stock: 10 ,  description: "descripcion general de smirnoff " },
    { id: 7, slug:"fernetBranca" ,name: "Fernet 750 Cc", img: "https://labebidadetusfiestas.com.ar/38326/fernet-branca-750cc.jpg", price: 995, stock: 10,  description: "descripcion general de fernet branca" },
    { id: 8, slug:"ronMalibu" ,name: "Malibú", img: "https://inspiravinoteca.com/web/image/product.template/1415/image_1024?unique=cceb6f3", price: 100, stock: 10,  description: "descripcion general de malibú" },
    { id: 9, slug:"licorJaggermeister" ,name: "Jaggermeister", img: "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52845_default_medium.jpeg", price: 100, stock: 10,  description: "descripcion general de Jaggermeister" },
    { id: 10,slug:"energizanteRedBull" , name: "Red Bull 250 Ml", img: "https://www.louganga.com/wp-content/uploads/2016/03/rb.jpg", price: 100, stock: 10,  description: "descripcion general de Red Bull" }
]

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { game } = useParams();

    useEffect(() => {
        setLoading(true);
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                if (game != undefined) {
                    const productsFiltered = productsInitial.filter(product => product.game === game)
                    setProducts(productsFiltered)
                } else {
                    setProducts(productsInitial);
                }
            })
            .catch((rej) => {
                toast.error("Error when trying to load the products");
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [game])


    return (
        <div id="ItemContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Cargando, por favor espere...</h2></div> : <ItemList products={products} />}
            {error ? <h2>Error al intentar cargar la página, inténtelo nuevamente...</h2> : null}
        </div >
    )
}

export default ItemListContainer