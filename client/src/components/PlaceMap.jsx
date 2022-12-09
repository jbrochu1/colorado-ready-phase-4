// import Header from './Header';
// import Footer from './Footer';
// import Map, {Marker, FullscreenControl} from 'react-map-gl';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
// import './mapPage.css';
import React, { useEffect, useState } from 'react';
import pnglogo from "../assets/RecyclingIcon.png"

export default function PlaceMap({ isAuthenticated, setUser, setIsAuthenticated, user }) {

    const [add, setAdd] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch("./api/places") 
        // {
        //     headers: {
        //        'Access-Control-Allow-Origin': '*'
        //         // 'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     }
        // })
            .then(response => response.json())
            .then((data) => setAdd(data))
    }, []);

    const defaultCenter = {
        lng: -105.001715,
        lat: 39.752657,
    }
    const myLatLng = { lat: -105.001715, lng: 39.752657 };

    const mapStyles = {
        height: '95vh',
        width: '80%',
        left: "150px",
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    }

    // console.log(selected)
    // var marker = new window.google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     title: "Hello World!",
    //   });
    //   marker.setMap(map)

    return (

        <div id="mapBoxContainer">
            <LoadScript id="map" googleMapsApiKey="AIzaSyCy6h5VPVHVTMi_XqiXtCGgR4B5Aqp1b_g">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={12}
                    center={defaultCenter}
                    options={options}
                >

                    {/* {add.map((marker) => (
                        <Marker
                            id="marker"
                            key={marker.post.title}
                            position={{ lat: marker.latitude, lng: marker.longitude }}
                            icon={{
                                url: pnglogo,
                                scaledSize: new window.google.maps.Size(30, 30),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                            }}
                            onClick={() => {
                                setSelected(marker);
                            }}
                        />
                    ))} */}
                    {/* <Marker
                        id="marker"
                        key={"marker title"}
                        position={{ lat: myLatLng.lat, lng: myLatLng.lng }}
                        icon={{
                            url: pnglogo,
                            scaledSize: new window.google.maps.Size(30, 30),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                        }}
                        // onClick={() => {
                        //     setSelected(marker);
                        // }}
                    /> */}

                </GoogleMap>
            </LoadScript>
        </div>
    )
}