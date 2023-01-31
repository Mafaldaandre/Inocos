import { Link } from "react-router-dom";
import "../assets/lacquersPage.css";
import { store } from "../store/store";

const Lacquers = (props) => {
    const { id, name, image } = props.item;
    
    return (
        <Link to={`/details/${id}`}>
            <article>{name}</article>
            <img alt="lacquers" className="imgLacquers img-fluid" src={`../images/${image}`}></img>
        </Link>
    );
};

export default Lacquers;