import { Link } from "react-router-dom";
import "../assets/homePage.css"

const GammaLacquers = (props) => {
    const { id, name, image } = props.item;
    return (
        <Link  className="col-3 gamma" to={`/gamma/${id}`}>
            
                <img className="imgGamma" src={`../images/${image}`} alt="unhas" width="300" height="300" />
                <h2 className="gamma">{name}</h2>
           
        </Link>
    );
};

export default GammaLacquers;