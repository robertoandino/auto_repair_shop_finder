import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const Map = ({ repairShops }) => {

    const [location, setLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }, []);

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={12}
            >
                {repairShops.map((shop, index) => (
                    <Marker key={index} position={{ lat: shop.lat, lng: shop.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;