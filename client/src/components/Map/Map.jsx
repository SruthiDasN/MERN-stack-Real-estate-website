import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker';

const Map = ({ address, city, country }) => {
  // Set an initial position for GeoCoderMarker
  const initialPosition = [60, 19];

  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        height: '40vh', // Correct the typo here
        width: '100%',
        marginTop: '20px',
        zIndex: 0,
        backgroundColor: 'red'
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} initialPosition={initialPosition} />
    </MapContainer>
  );
};

export default Map;
