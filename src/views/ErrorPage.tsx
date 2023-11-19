import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = (): ReactElement => {
    return (
        <div>
            <h1>🥸hhhmmm... Esta página no existe... </h1>
            <Link to='/'>
                <button className='errorButton'>👈🏻Volver...</button>
            </Link>
        </div>
    );
};

export default ErrorPage;