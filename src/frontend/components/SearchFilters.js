import React, { useState } from 'react';
import './SearchFilters.css';

const SearchFilters = ({ onSearch }) => {

    const [model, setModel] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(model, service)
        onSearch({ model, service });
    }

    return (
        <div className="search-filters-card">
            <h2 className="search-title">Find Your Repair Shop</h2>
            <form className="search-filters" onSubmit={handleSubmit}>
                <div className="filter-input">
                    <label htmlFor="car-model">Car Model:</label>
                    <div className="input-wrapper">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <input 
                            type="text"
                            id='car-model'
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            placeholder="Enter your car model"
                        />
                    </div>
                </div>
                <div className="filter-input">
                    <label htmlFor="service-type">Service Type:</label>
                    <div className="input-wrapper">
                        <i className="fa fa-wrench" aria-hidden="true"></i>
                        <input 
                            type="text"
                            id='service-type'
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            placeholder="Enter service type"
                        />
                    </div>
                </div>
                <button type="submit" className="search-button">
                    <i className="fa fa-search" aria-hidden="true"></i>Search
                </button>
            </form>
        </div>
    );
};

export default SearchFilters;