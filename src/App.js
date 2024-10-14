import React, { useState } from 'react';
import axios from 'axios';
import OSMMap from './frontend/components/Map';
import SearchFilters from './frontend/components/SearchFilters';
import './App.css';
import 'leaflet/dist/leaflet.css';

const App = () => {
  
  const [repairShops, setRepairShops] = useState([]);

  const handleSearch = async (filters) => {
    /*try {
      const res = await axios.get('/api/repair-shops', {
        params: filters,
      });
      setRepairShops(res.data);
    } catch (err) {
      console.error('Error fetching repair shops: ', err);
    }*/
      const sampleRepairShops = [
        { lat: 51.505, lng: -0.09, name: 'Shop A', service: 'General Repair' },
        { lat: 51.515, lng: -0.1, name: 'Shop B', service: 'Transmission' },
      ];
      
      setRepairShops(sampleRepairShops);
  };

  return (
    <div>
      <SearchFilters onSearch={handleSearch} />
      <OSMMap repairShops={repairShops} />
    </div>
  );
};

export default  App;