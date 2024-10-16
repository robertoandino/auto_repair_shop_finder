import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import OSMMap from './frontend/components/Map';
import SearchFilters from './frontend/components/SearchFilters';
import './App.css';
import 'leaflet/dist/leaflet.css';

const mockRepairShops = [
  { lat: 25.7617, lng: -80.1918, name: 'Shop A', service: 'General Repair', model: 'Sedan'},
  { lat: 25.7743, lng: -80.1937, name: 'Shop B', service: 'Transmission', model: 'SUV'},
  { lat: 25.7333, lng: -80.2465, name: 'Shop C', service: 'Brake Repair', model: 'Truck'},
  { lat: 25.7617, lng: -80.1918, name: 'Shop D', service: 'Oil Change', model: 'Sedan'},
];

const App = () => {
  
  const [repairShops, setRepairShops] = useState(mockRepairShops);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (err) => {
          console.error('Error fetching user location:', err);
        }
      );
    }
  }, []);

  const handleSearch = (filters) => {
    /*try {
      const res = await axios.get('/api/repair-shops', {
        params: filters,
      });
      setRepairShops(res.data);
    } catch (err) {
      console.error('Error fetching repair shops: ', err);
    }*/

      const { model, service } = filters;

      const filteredShops = mockRepairShops.filter((shop) => {
     
        const matchesModel = !model || shop.model.toLowerCase().includes(model.toLowerCase());
        const matchesService = !service || shop.service.toLowerCase().includes(service.toLowerCase());
        return matchesModel && matchesService;
     
      });
      //console.log(filteredShops);
      setRepairShops(filteredShops);
  
  };

  return (
    <div>
      <SearchFilters onSearch={handleSearch} />
      <OSMMap repairShops={repairShops} userLocation={userLocation} />
    </div>
  );
};

export default  App;