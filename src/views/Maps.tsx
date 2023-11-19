import React, { ReactElement, useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import LastSearches from "../components/LastSearches";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { APIKEY } from "../APIKEY/credentials"; 

const Maps: React.FunctionComponent = (): ReactElement => {
    /* location to Sagrada Familia*/
    const sagradaFamilia = {
        lat: 41.40366478082409,
        lng: 2.1743983200647503
    };

    const [mapSagradaFamilia, setMapSagradaFamilia] = useState(sagradaFamilia);
    const [markerPosition, setMarkerPosition] = useState(sagradaFamilia);
    const [lastSearche, setLastSearch] = useState<string[]>([]);

    useEffect(() => {
        const storedLastSearch = JSON.parse(
            localStorage.getItem('lastSearch') || '[]'
        );
        setLastSearch(storedLastSearch);
    },[]);

    // Maps Size
    const mapsSize = {
        height: '500px',
        margin: '50px'
    };

    const [searched, setSearched] = useState(false);

    const handleSearch = async (
        location: { lat: number; lng: number },
        searchString: string
        ) => {
            setMapSagradaFamilia(location);
            setMarkerPosition(location);
            setSearched(true);
            if (lastSearche.includes(searchString)) {
                const updatedLastSearch = lastSearche.filter(
                    (item) => item !== searchString
                );
                updatedLastSearch.push(searchString);
                setLastSearch(updatedLastSearch);
                localStorage.setItem(
                    'lastSearch',
                    JSON.stringify(updatedLastSearch)
                );
            } else {
                const updatedLastSearch = [...lastSearche, searchString];
                setLastSearch(updatedLastSearch);
                localStorage.setItem(
                    'lastSearch',
                    JSON.stringify(updatedLastSearch)
                );
            };
        };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {searched &&  mapSagradaFamilia && markerPosition && (
                <LoadScript googleMapsApiKey={APIKEY}>
                    <GoogleMap mapContainerStyle={mapsSize} zoom={20} center={mapSagradaFamilia}>
                        {markerPosition && <Marker position={markerPosition} />}
                    </GoogleMap>
            </LoadScript>
            )}
            <LastSearches lastSearche={lastSearche} />
        </>
    );
};

export default Maps;