import React, { useState, useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import Location from "../models/LocationClass";
import { getVendingLocationById } from "../services/locationServices";
import "../assets/vendingLocationPage.css";

const VendingLocationPage = () => {
  const { id } = useParams();

  const [location, setLocation] = useState(
    new Location ()
  );

  useEffect(() => {
    getVendingLocationById(id).then(({ data: location }) => {      
      setLocation(location)
    })
  }, []);

  return (
    <>
      {location &&(
        <>
          <h2> {location.name} </h2>
          <img src={`/images/${location.image}`}></img>
          <p className="pVending"> {location.address} </p>
          
        </>
      )
      }
    </>
  );
};

export default VendingLocationPage;