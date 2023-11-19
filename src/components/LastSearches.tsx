import React, { ReactElement, useState } from "react";

interface LastSearchesProp {
    lastSearche: string[];
}

const LastSearches: React.FunctionComponent<LastSearchesProp> = ({ 
    lastSearche,
}): ReactElement => {
    const [showAll,] = useState(false);

    const displayedSearches = showAll
        ? lastSearche.slice().reverse()
        : lastSearche.slice(-6).reverse();

    return (
        <div className="lastSearches-container">  
            <ul>
                <h4>Searches</h4>
                {displayedSearches.length > 0 ? (
                    displayedSearches.map((searchString, index) => (
                <li key={index}>
                    {searchString}
                </li>
                    ))
                ) : (
                    <p>No searches.</p>
                )}
            </ul>
        </div>
    );
};

export default LastSearches;