import { ReactElement } from "react";
import LastesSearches from "../components/LastestSearches";
import SearchBar from "../components/SearchBar";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function Maps(): ReactElement {
    // Sagrada Familia, Barcelona
    const sagradaFamilia = {
        lat: 41.40366478082409,
        lng: 2.1743983200647503
    };
    
    // Maps Size
    const mapsSize = {
        height: '300px',
        margin: '100px'
    };

    return (
        <>
            <p>Welcome to the Map!</p>
            <SearchBar />
            <LoadScript googleMapsApiKey="YOUR_KEY">
                <GoogleMap
                    mapContainerStyle={mapsSize}
                    zoom={20}
                    center={sagradaFamilia}
                ></GoogleMap>
            </LoadScript>
            <LastesSearches />
        </>
    );
};