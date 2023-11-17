import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const MainPage: React.FunctionComponent = (): ReactElement => {
    return (
        <div>
            <h3>Wellcome to the App</h3>
            <Link to="/map">
                <button className="searchButton_home">Busqueda</button>
            </Link>
        </div>
    );
};

export default MainPage;