import React, { ReactElement, useState } from "react";
import LastesSearches from "../components/LastestSearches";
import SearchBar from "../components/SearchBar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const Maps: React.FunctionComponent = (): ReactElement => {
     // Sagrada Familia, Barcelona
    const sagradaFamilia = {
        lat: 41.40366478082409,
        lng: 2.1743983200647503
    };

    const [mapSagradaFamilia, setMapSagradaFamilia] = useState(sagradaFamilia);
    const [markerPosition, setMarkerPosition] = useState(sagradaFamilia);
    
    // Maps Size
    const mapsSize = {
        height: '400px',
        margin: '100px'
    };

    const handeleSearch = (location: { lat: number; lng: number }) => {
        setMapSagradaFamilia(location)
        setMarkerPosition(location)
    };

    return (
        <>
            <p>Welcome to the Map!</p>
            <SearchBar onSearch={handeleSearch} />
            <LoadScript googleMapsApiKey="AIzaSyCW78wMfEvaIPxjaRy7o6u4nvhcr6vmcZI">
                <GoogleMap
                    mapContainerStyle={mapsSize}
                    zoom={20}
                    center={mapSagradaFamilia}
                    
                >
                    {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
            </LoadScript>
            <LastesSearches />
        </>
    );
};

export default Maps;