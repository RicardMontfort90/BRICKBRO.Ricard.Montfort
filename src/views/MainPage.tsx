import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const MainPage: React.FunctionComponent = (): ReactElement => {
    return (
        <div className="MainPage">
            <h2>Welcome to the App 💻</h2>
            <h4>By Ricard Montfort Romero</h4>
            <span>¡Click the Button!</span>
            <Link to="/map">
                <button className="searchButton_home">⭐</button>
            </Link>
        </div>
    );
};

export default MainPage;