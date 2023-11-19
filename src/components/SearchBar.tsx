import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLink, APIKEY } from '../APIKEY/credentials';


interface SearchBarProps {
    onSearch: (
        location: { lat: number; lng: number },
        searchString: string
    ) => void;
};

    const SearchBar: React.FunctionComponent<SearchBarProps> = ({ onSearch }): ReactElement => {
        const [searchText, setSearchText] = useState('');
        const [errorMessage, setErrorMessage] = useState<string | number |boolean>('');
        
        const navigate = useNavigate();

        const handleSearchClick = async () => {
            /*  prueba para que no se dupliquen resultados */
            if (!searchText.trim()) {
                setErrorMessage('Please type a valid address/city.');
                return;
              }
            /*                                             */
            try {
                const response = await fetch(
                    `${apiLink}${encodeURIComponent(searchText)}&key=${APIKEY}`
                );

                if (!response.ok) {
                    setErrorMessage('Error geolocation data.');
                };

                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    const location = data.results[0].geometry?.location;
                    if (location) {
                    setErrorMessage('');
                    onSearch(location, searchText);
                    navigate('/map');
                    setSearchText('');
                    }; 
                }; 
            } catch (error) {
                console.error('Error searching for the location:', error);
            };
        };

    return (
        <div className='SearchBar_container'>
            <input 
                className='searchbar_input'
                placeholder='🔍 City, address, postcode...'
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='search_button' onClick={handleSearchClick}>
                Search
            </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default SearchBar;