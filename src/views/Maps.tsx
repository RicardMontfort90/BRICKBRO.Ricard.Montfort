import React, { ReactElement, useState } from "react";
import SearchBar from "../components/SearchBar";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { APIKEY } from "../APIKEY/credentials";


const Maps: React.FunctionComponent = (): ReactElement => {
     // Sagrada Familia, Barcelona
     const [mapSagradaFamilia, setMapSagradaFamilia] = useState<{
        lat: number;
        lng: number;
      } | null>(null);
      const [markerPosition, setMarkerPosition] = useState<{
        lat: number;
        lng: number;
      } | null>(null);
      const [searched, setSearched] = useState(false);
      const mapsSize = {
        height: '400px',
        margin: '50px',
      };

      const handleSearch = async (location: { lat: number; lng: number }) => {
        setMapSagradaFamilia(location);
        setMarkerPosition(location);
        setSearched(true);
      };
    
    
      /*
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

    const handeleSearch = async (location: { lat: number; lng: number }) => {
        setMapSagradaFamilia(location);
        setMarkerPosition(location);
        setSearched(true);
    };
*/
    return (
        <>
            <p>Welcome to the Map!</p>
            <SearchBar onSearch={handleSearch} />
            {searched && mapSagradaFamilia && markerPosition && (
            <LoadScript googleMapsApiKey={APIKEY}>
                <GoogleMap mapContainerStyle={mapsSize} zoom={20} center={mapSagradaFamilia}>
                    {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
            </LoadScript>
            )};
        </>
    );
};

export default Maps;