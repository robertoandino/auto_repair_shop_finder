import React, { useState } from 'react';
import './SearchFilters.css';

const SearchFilters = ({ onSearch }) => {

    const [model, setModel] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(model && service){
         
            onSearch({ model, service });
    
        }else{

            alert('Please select both car model and service type');

        }
    }

    return (
        <div className="search-filters-card">
            <h2 className="search-title">Find Your Repair Shop</h2>
            <form className="search-filters" onSubmit={handleSubmit}>
                <div className="filter-input">
                    <label htmlFor="car-model">Car Model:</label>
                    <div className="input-wrapper">
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <select 
                            id="car-model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            aria-label="Select Car Model"
                        >
                            <option value="">Select a Car Model</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Ford">Ford</option>
                            <option value="BMW">BMW</option>
                            <option value="Audi">Audi</option>
                            <option value="Mercedes">Mercedes</option>
                        </select>
                    </div>
                </div>
                <div className="filter-input">
                    <label htmlFor="service-type">Service Type:</label>
                    <div className="input-wrapper">
                        <i className="fa fa-wrench" aria-hidden="true"></i>
                        <select
                            id="service-type"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            aria-label="Select Service Type"
                        >
                            <option value="">Select a Service Type</option>
                            <option value="General Repair">General Repair</option>
                            <option value="Transmission">Transmission</option>
                            <option value="Break Service">Brake Service</option>
                            <option value="Oil Change">Oil Change</option>
                        </select>
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