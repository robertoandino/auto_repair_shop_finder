import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

import userIconn from '../../assets/icons/placeholder.png';
import pinIcon from '../../assets/icons/pin.png';

const OSMMap = ({ repairShops, userLocation }) => {

    //const defaultCenter = [51.505, -0.09]; //default location coordinates

    const userIcon = new L.Icon({
        iconUrl: userIconn,
        iconSize: [25, 25],
    });

    const getShopIcon = (service) => {
        switch(service){
            case 'General Repair':
                return new L.Icon({
                    iconUrl: pinIcon,
                    iconSize: [25, 25],
                });
            case 'Transmission':
                return new L.Icon({
                    iconUrl: pinIcon,
                    iconSize: [25, 25],
                });
            case 'Brake Repair':
                return new L.Icon({
                    iconUrl:  pinIcon,
                    iconSize: [25, 25],
                });
            case 'Oil Change':
                return new L.Icon({
                    iconUrl:  pinIcon,
                    iconSize: [25, 25],
                });
            default:
                return null;
        }
    }

    function ChangeView({ center }){
        const map = useMap();
        map.setView(center, 13);
        return null;
    }

    //console.log('Repair Shops:', JSON.stringify(repairShops, null, 2));

    const mapCenter = userLocation || (repairShops.length > 0 ? [repairShops[0].lat, repairShops[0].lng] : [51.505, -0.09]);

    return (
        <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
            {userLocation && <ChangeView center = {userLocation} />}
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
                <Marker key={index} position={[shop.lat, shop.lng]} icon={getShopIcon(shop.service)}>
                    <Popup>
                        {shop.name} <br /> {shop.service}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default OSMMap;