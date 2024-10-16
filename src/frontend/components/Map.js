import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const OSMMap = ({ repairShops }) => {

    const [userLocation, setUserLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]); //default location coordinates

    const userIcon = new L.Icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Location_dot_blue.svg',
        iconSize: [25, 25],
    });

    useEffect(() => {
        
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log('User location:', latitude, longitude);
                    setUserLocation([latitude, longitude]);
                    setMapCenter([latitude, longitude]);
                },
                (err) => {
                    console.error('Error fetching user location: ', err);
                }
            );
        }


    }, []);

    function ChangeView({ center }){
        const map = useMap();
        map.setView(center, 13);
        return null;
    }

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
            <ChangeView center = {mapCenter} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreemap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {userLocation && (
                <Marker position={userLocation} icon={userIcon}>
                    <Popup>You are here</Popup>
                </Marker>
            )}

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