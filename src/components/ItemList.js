import Item from "../components/Item";





const ItemList = (props) => {

    return (
        <>
            {props.products.map((product) => {
                return <Item key={product.id} name={product.name} price={product.price} stock={product.stock} img={product.img} slug={product.slug} />
            })}
        </>
    )
}

export default ItemList