import React, { useState } from 'react';

const SearchFilters = ({ onSearch }) => {

    const [model, setModel] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(model, service)
        onSearch({ model, service });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Car Model:
                <input 
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </label>
            <label>
                Service Type:
                <input
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchFilters;