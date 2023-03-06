import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';


const containerStyle = {
    width: '85vw',
    height: '400px'
};

const center = {
    lat: 23.869418565077755,
    lng: 90.39351430067086
};

const Map = () => {
    return (
        <div className='px-6 lg:px-20'>
            <h1 className='text-center text-3xl text-info font-bold py-8'>Our Location</h1>
            <LoadScript
                className='py-8'
                googleMapsApiKey={process.env.REACT_APP_google_map_key}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>

        </div>
    );
};

export default Map;