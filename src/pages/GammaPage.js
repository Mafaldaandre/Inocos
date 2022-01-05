import React, { useState, useEffect } from "react";
import { getLacquers } from '../services/lacquersServices';
import {
  useParams
} from "react-router-dom";
import Lacquers from "../components/lacquers";
import Gamma from "../models/GammaClass";
import { getGammaById } from "../services/gammaServices";

const GammaPage = () => {
  const { id } = useParams();
  const [lacquers, setLacquers] = useState([]);
  const [gamma, setGamma] = useState (
    new Gamma()
  )

  useEffect(() => {
    getGammaById(id).then(({data: oGamma}) => {
      setGamma(oGamma)
    });
    getLacquers().then(({ data: lacquers }) => {
      const filterGamma = lacquers.filter(lacquer => lacquer.gammaId == id);

      setLacquers(filterGamma);
    })
  }, [id]);


  return (
    <>
      <div>
       <h1>{gamma.name}</h1>
      </div>
      <div className="lacquers">
        {
          lacquers.map(gamma => (<Lacquers item={gamma} key={gamma.id} />))
        }
      </div>
    </>
  );
};

export default GammaPage;