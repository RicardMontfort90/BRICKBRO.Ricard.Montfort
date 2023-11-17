import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = (): ReactElement => {
    return (
        <div>
            <h5> hhhmmm... Esta página no existe... </h5>
            <Link to='/'>Volver...</Link>
        </div>
    );
};

export default ErrorPage;