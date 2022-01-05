import React, { useState, useEffect } from "react";
import Lacquers from '../components/lacquers';
import { getLacquers } from '../services/lacquersServices';
import "../assets/lacquersPage.css";

function LaquersPage() {  
  const [lacquers, setLacquers] = useState([]);
 
  useEffect(() => {
    getLacquers().then(({data}) => {
      setLacquers(data)
    })
  }, []); 

  return (
  <>
    <div  className="lacquers">
      {
       lacquers.map(lacquer=>(<Lacquers item={lacquer} key={lacquer.id} />))
      }
    </div>
  </>
  );

};

export default LaquersPage;