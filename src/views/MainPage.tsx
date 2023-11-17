import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const MainPage: React.FunctionComponent = (): ReactElement => {
    return (
        <div>
            <h2>Welcome to the App 💻</h2>
            <h4>By Ricard Montfort Romero</h4>
            <Link to="/map">
                <button className="searchButton_home">Empezar</button>
            </Link>
        </div>
    );
};

export default MainPage;