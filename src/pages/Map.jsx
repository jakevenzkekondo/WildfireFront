import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import LocationInfoBox from '../components/LocationInfoBox';
import 'leaflet/dist/leaflet.css';
import fireIconUrl from '../images/fire-icon.png';

const markerIcon = new L.Icon({
    iconUrl: fireIconUrl,
    iconSize: [30, 45],
    iconAnchor: [12, 41],
});

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

function isWithinSelectedDate(eventDateStr, selectedDateStr) {
    const eventDate = new Date(eventDateStr);
    const selectedDate = new Date(selectedDateStr);
    return eventDate >= selectedDate;
}

function readableDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
    }).format(date);
}

function DatePickerNative({ selectedDate, setSelectedDate }) {
    return (
        <footer className="date-picker">
            <label htmlFor="date-picker">Show wildfires since: </label>
            <input
                id="date-picker"
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
            />
        </footer>
    );
}

function Footer() {
    return (
        <footer className="footer">
            Map from <a href='https://www.openstreetmap.org/copyright'> OpenStreetMap</a>
        </footer>
    );
}

const Map = ({ eventData, center = { lat: 42.3265, lng: -122.8756 }, zoom = 6 }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [selectedDate, setSelectedDate] = useState(() => {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        return date.toISOString().split('T')[0];
    });

    const filteredMarkers = eventData
        .filter(ev => ev.categories[0].id === NATURAL_EVENT_WILDFIRE && isWithinSelectedDate(ev.geometries[0].date, selectedDate))
        .map((ev, index) => (
            <Marker
                key={index}
                position={[ev.geometries[0].coordinates[1], ev.geometries[0].coordinates[0]]}
                icon={markerIcon}
                eventHandlers=
                {
                    {
                        click: () =>
                            setLocationInfo({
                                lat: ev.geometries[0].coordinates[1],
                                lng: ev.geometries[0].coordinates[0],
                                title: ev.title,
                                source: ev.sources[0].id,
                                date: readableDate(ev.geometries[0].date),
                            })
                    }
                }
            >
            </Marker>
        ));

    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredMarkers}
            </MapContainer>

            {locationInfo && (
                <LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)} />
            )}

            <DatePickerNative selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <Footer />
        </div>
    );
};

export default Map
