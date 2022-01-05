import React, { useState, useEffect } from "react";
import { getLacquers } from '../services/lacquersServices';
import { getGamma } from '../services/gammaServices';
import {
  useParams
} from "react-router-dom";
import "../assets/searchPage.css";
import Lacquers from '../components/lacquers';

const SearchPage = () => {
  const [lacquer, setLacquer] = useState([]);
  const { search } = useParams();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    getLacquers().then(async ({ data: lacquers }) => {
      const { data: gammas } = await getGamma();
      lacquers.map(laquer => laquer.gamma = gammas.find(({ id }) => id === laquer.gammaId));
      const filterLacquer = lacquers.filter(lacq => searchValue(lacq));
      setLacquer(filterLacquer)
      setLoading(false)
    })
  }, [search, filter]);

  const handleChange = (event) => setFilter( event.target.value)

  const searchValue = (lacq) => {
    if(filter === null){
    return (searchOnObject(lacq.color) || searchOnObject(lacq.name) || searchOnObject(lacq.gamma.name)) ? lacq : null;
    }
     return filter == 1 && searchOnObject(lacq.color) || filter == 2 && searchOnObject(lacq.name) || filter == 3 && searchOnObject(lacq.gamma.name) ? lacq : null
    }

  const searchOnObject = (value) => {
    const objectValue = removeAccent(value.trim());
    const filter = removeAccent(search.trim());
    return objectValue.includes(filter);

  }

  const removeAccent = (text) => {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
  }

  return (
    <>
      <select value={filter} onChange={handleChange}>
        <option value="" selected disabled hidden>Filtrar por</option>
        <option value="1">Cor</option>
        <option value="2">Nome</option>
        <option value="3">Gamma</option>
      </select>
   
      

      <div className="lacquers">
        {
          lacquer.length > 0 ?
            lacquer.map(lacquer => (<Lacquers item={lacquer} key={lacquer.id} />))
            : loading ? <p>Loading</p> : <p>Não existem vernizes.</p>
        }
      </div>
    </>
  )
};

export default SearchPage;