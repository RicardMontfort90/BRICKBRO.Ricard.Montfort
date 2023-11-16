import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage(): ReactElement {
    return (
        <div>
            <h5> hhhmmm... Esta página no existe... </h5>
            <Link to='/'>Volver...</Link>
        </div>
    )
}