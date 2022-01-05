import images from "../constants/images";
import ImageCarousel from "../components/imageCarousel";
import "../assets/homePage.css";
import { getGamma } from "../services/gammaServices";
import { useEffect, useState } from "react";
import GammaLacquers from "../components/gammaLacquers";

export default function Home() {

  const [gamma, setGamma] = useState([]);
 
  useEffect(() => {
    getGamma().then(({data}) => {
      setGamma(data)

    })
  }, []); 

  return (
    <>
      <div>
        <ImageCarousel images={images} />
      </div>

      <hr />

      <div>
        <h1>Gammas</h1>
      </div>

      <div className="row">

      {
       gamma.map(g=>(<GammaLacquers item={g} key={g.id} />))
      }

      </div>
    </>

  );
}