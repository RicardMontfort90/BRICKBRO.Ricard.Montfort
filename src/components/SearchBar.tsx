import { ReactElement } from 'react';

export default function SearchBar(): ReactElement {
    return (
        <div className='SearchBar_container'>
            <input 
            className='searchbar_input'
            placeholder='City, address, postcode...'
            type='text'
            />
            <button className='searchbar_button'>Search</button>
        </div>
    );
};