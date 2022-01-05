import React, { useState, useEffect } from "react";
import { getLacquers } from '../services/lacquersServices';
import { getGamma } from '../services/gammaServices';
import {
  useParams
} from "react-router-dom";
import "../assets/detailsPage.css";
import Gamma from "../models/GammaClass";
import Lacquer from "../models/LacquerClass";
import { store } from "../store/store";

const Details = () => {
  const { id } = useParams();
  const [lacquer, setLacquer] = useState(
   new Lacquer()
  );

  const [gamma, setGamma] = useState(
    new Gamma()
  );

  useEffect(() => {
    getLacquers().then(({ data: lacquers }) => {      
      const selectedLacquer = lacquers.find(lacq => lacq.id == id);
      setLacquer(selectedLacquer)
    })
  }, []);

  useEffect(() => {
    if(lacquer.gammaId){
      getGamma().then(({data: lacquersGamma})=>{
        const selectedGamma = lacquersGamma.find(gamma => gamma.id == lacquer.gammaId);
        setGamma(selectedGamma);
      })
    }
  }, [lacquer]);

  const addToWishList = () => {
    store.dispatch(
      {
      type: 'ADD',
      lacquer
      }
    );
  }

  return (
    <>
      {lacquer && gamma &&(
        <>
          <h2 className="details"> Details </h2>
          <div className="row">
            <div className="col-2">
              <img className="imageDetails" src={`/images/${lacquer.image}`}></img>
            </div>
            <div className="col-2">
              <p> <label> Nome: </label> {lacquer.name} </p>
              <p> <label> Gamma: </label> {gamma.name}</p>
              <p> <label> Cor: </label> {lacquer.color}</p>
              <div className="selectDetails">
                <button onClick={addToWishList}>Adicionar á lista de desejos </button>
              </div>
            </div>
          </div>
          
        </>
      )
      }
    </>
  );
};

export default Details;