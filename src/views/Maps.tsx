import React, { ReactElement, useState } from "react";
import SearchBar from "../components/SearchBar";
import LastesSearches from "../components/LastestSearches";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { APIKEY } from "../APIKEY/credentials"; 


const Maps: React.FunctionComponent = (): ReactElement => {

    const sagradaFamilia = {
        lat: 41.40366478082409,
        lng: 2.1743983200647503
    };

    const [mapSagradaFamilia, setMapSagradaFamilia] = useState(sagradaFamilia);
    const [markerPosition, setMarkerPosition] = useState(sagradaFamilia);
    
    // Maps Size
    const mapsSize = {
        height: '400px',
        margin: '50px'
    };

    const [searched, setSearched] = useState(false);

    const handleSearch = async (location: { lat: number; lng: number }) => {
        setMapSagradaFamilia(location);
        setMarkerPosition(location);
        setSearched(true);
        
    };

    return (
        <>
            <p>Welcome to the Map!</p>
            <SearchBar onSearch={handleSearch} />
            {searched &&   mapSagradaFamilia && markerPosition && (
            <LoadScript googleMapsApiKey={APIKEY}>
                <GoogleMap mapContainerStyle={mapsSize} zoom={20} center={mapSagradaFamilia}>
                    {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
            </LoadScript>
            )}
            <LastesSearches />
        </>
    );
};

export default Maps;