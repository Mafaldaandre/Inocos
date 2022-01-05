import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "../assets/mapPage.css";
import React, { useState, useEffect } from "react";
import { getVendingLocation } from '../services/locationServices';
import { useNavigate } from "react-router-dom";

const MapPage = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCfyD7u1VWWwuCPxzOros8zWaermBJ0WfY",
    });

    const position = {
        lat: 40.6736837,
        lng: -7.9206225
    };

    const [vendingLocation, setVendingLocation] = useState([]);
 
    const navigate = useNavigate();
    
    const handleOpenLocation = (location) => {
      navigate(`/vendingLocation/${location.id}`)
    };

    useEffect(() => {
      getVendingLocation().then(({data}) => {
        setVendingLocation(data)
      })
    }, []); 

    return <div className="map">

        <h1>As nossas lojas</h1>
        
        {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{width:"70%", height:"70%", marginLeft:"auto", marginRight:"auto" }}
                  center={position}
                  zoom={6} 
        
                >
                    {vendingLocation.map(location=><Marker key={location.id} position = {location.position} onClick={e=>handleOpenLocation(location)} ></Marker>)}

                </GoogleMap>
            ) : <></>
        } 
       
    </div>
};

export default MapPage;