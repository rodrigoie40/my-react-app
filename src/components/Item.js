import InfoButton from "../components/infoButton";

const Item = (props) => {

    return (
        <div id="storeItem" className="dropShadow">
            <h3>{props.name}</h3>
            <img src={props.img} />
            <h5>Precio: ${props.price}</h5>
            <div>
                <InfoButton slug={props.slug} />
            </div>
        </div>
    )
}

export default Item