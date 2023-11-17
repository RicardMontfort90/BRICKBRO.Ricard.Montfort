import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import brickbroLogo from "../images/BRICKBRO_LOGO.png";


const Navbar: React.FC= ():  ReactElement => {
    return (
        <div>
            <Link to="/">
                <img className="app-logo" src={brickbroLogo} alt="logo" />
            </Link>
        </div>
    );
};

export default Navbar;