import {useEffect, useRef, useState} from 'react'
import './App.css'
import mapboxgl from 'mapbox-gl';
import JSONGrid from '@redheadphone/react-json-grid';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SearchType} from "./SearchType.tsx";
import {EndPoints} from "./EndPoints.tsx";
import {SearchSelection} from "./SearchSelection.tsx";
import {getSearchUrl} from "./GetSearchUrl.tsx";
import {API} from "./API.tsx";

mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN;


function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(9);
    const [gridData, setGridData] = useState([{}]);
    const [showMap, setShowMap] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const [countryName, setCountryName] = useState("");
    const [searchInput, setSearchInput] = useState(new SearchSelection());

    
    const handleClick = async () => {
        toast.info('Searching', { autoClose: 1250 });
        try {
            const searchUrl = getSearchUrl(searchInput);
            console.log(searchUrl);
            const response = await fetch(searchUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const data = await response.json();
            setGridData(data);
            setShowGrid(true);
            if (data.items.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.items.length);
                const randomRow = data.items[randomIndex];
                setLat(randomRow.latlng[0]);
                setLng(randomRow.latlng[1]);
                setZoom(9);
                setCountryName(`${randomRow?.name?.official ?? ""} row ${randomIndex + 1}`);
                setShowMap(true);
            }
        } catch (error) {
            toast.error('Error, check console logs for details');
            const detail = error as unknown as Error;
            console.error(detail.message);
        }
    };

    useEffect(() => {
        if (map.current) {
            // @ts-ignore
            map.current.flyTo({
                center: [lng,  lat],
                essential: true
            });
            return; // initialize map only once
        }

        // @ts-ignore
        map.current = new mapboxgl.Map({
            // @ts-ignore
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <ToastContainer position="top-right"/>
            <h1>This Dot Co: Application</h1>
            <div className="card">
                <div className="row">
                    <select className="pad-items" onChange={(e) => {
                        searchInput.ApiUrl = e.target.value as unknown as API;
                        setSearchInput(searchInput);
                    }}>
                        <option value={API.PYTHON}>{API.PYTHON}</option>
                        <option value={API.NET}>{API.NET}</option>
                    </select>
                </div>
                <div className="row">
                <select className="pad-items" onChange={(e) => {
                        searchInput.EndPoint = e.target.value as unknown as EndPoints;
                        setSearchInput(searchInput);
                    }}>
                        <option value={EndPoints.Countries}>{EndPoints.Countries}</option>
                        <option value={EndPoints.Regions}>{EndPoints.Regions}</option>
                        <option value={EndPoints.Languages}>{EndPoints.Languages}</option>
                    </select>
                </div>
                <div className="row">
                    <select className="pad-items" onChange={(e) => {
                        searchInput.Type = e.target.value as unknown as SearchType;
                        setSearchInput(searchInput);
                    }}>
                        <option value={SearchType.All}>{SearchType.All}</option>
                        <option value={SearchType.Id}>{SearchType.Id}</option>
                        <option value={SearchType.FreeText}>{SearchType.FreeText}</option>
                    </select>
                </div>
                <div className="row">
                    <input className="pad-text" type="text" name="searchText" onChange={(e) => {
                        searchInput.FreeText = e.target.value as unknown as string;
                        setSearchInput(searchInput);
                    }}/>
                </div>
                <div className="row">
                    <button className="pad-items" onClick={handleClick}>Search</button>
                </div>
            </div>
            <div className={showGrid ? 'not-empty' : 'empty'}>
                <JSONGrid data={gridData}/>
            </div>
            <div className={showMap ? 'show' : 'hide'}>
                <h3>{countryName}</h3>
                <div ref={mapContainer} className="map-container"/>
            </div>
        </>
    )
}

export default App
