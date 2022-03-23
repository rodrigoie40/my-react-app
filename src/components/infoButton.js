import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const InfoButton = (props) => {
    return (
        <Link className="styleRemove dropShadow" to={/item/ + props.slug}><Button id="detailsButton" variant="contained">Detalles del producto</Button></Link>
    )
}

export default InfoButton
