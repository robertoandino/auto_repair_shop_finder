import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OSMMap = ({ repairShops }) => {

    const [location, setLocation] = useState([51.505, -0.09]); //default location coordinates

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
            },
            () => {
                console.error('Could not get current location');
            }
        );
    }, []);

    return (
        <MapContainer center={location} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreemap.org/copyright">OpenStreetMap</a> contributors'
            />
            {repairShops.map((shop, index) => (
                <Marker key={index} position={[shop.lat, shop.lng]}>
                    <Popup>
                        {shop.name} <br /> {shop.service}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default OSMMap;