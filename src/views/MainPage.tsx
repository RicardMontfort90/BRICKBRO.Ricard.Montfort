import React, { ReactElement } from "react";
import SearchBar from "../components/SearchBar";

const MainPage: React.FunctionComponent = (): ReactElement => {
    const handeleSearch = (location: {lat: number; lng: number}) => {
        console.info('Location:', location)
    };
    
    return (
        <div>
            <SearchBar onSearch={handeleSearch}/>
        </div>
    );
};

export default MainPage;