import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function PlaceMap {
// Key in the created file /client/.env.local - 
// - which is not commited into Git itself and it will pick this up and load it.
function PlaceMap() {
    console.log("1")
    // const {isLoaded} = useLoadScript({
    //     // googleMapsApiKey: ProcessingInstruction.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    //     googleMapsApiKey: "AIzaSyCy6h5VPVHVTMi_XqiXtCGgR4B5Aqp1b_g"
    // });
    console.log("2")
    // if (!isLoaded) return <div>Loading...</div>
    console.log("3")
    return <Map />;
    // return PlaceMap
};

function Map() {
    // useMemo - memorise the result
    //const center = useMemo(() => ({lat: 44, lng: -80}, []));
    //const center ={lat:-3.745,lng: -38.523}
    console.log("4")
    return <GoogleMap zoom = {10} />
    // return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} 
    // mapContainerClassName>
    // <Marker position = {center}></Marker>
    // </GoogleMap>
    //.mapContainer was added to index.css
}
export default PlaceMap