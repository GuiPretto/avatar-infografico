import { MapContainer, Marker, Popup, TileLayer, useMap, ImageOverlay, Circle } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility'
import AvatarMapa from "../../../public/mapa.jpg";
import { Wrapper } from "./style";
import { latLng, latLngBounds, LatLngBounds, point } from "leaflet";
import { getMinMainHeight } from "../utils";
import { useEffect, useState } from "react";

const LocationMarker = ({ actualLocation }) => {
    const map = useMap()

    useEffect(() => {
        if (actualLocation) {
            map.flyTo([actualLocation.lat, actualLocation.long], 11)
        } else {

        }
    }, [actualLocation])

    return !actualLocation ? null : (
        <Marker position={[actualLocation.lat, actualLocation.long]}>
            <Popup>{actualLocation.title}</Popup>
        </Marker>
    )
}

const Map = ({ actualLocation }) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true)
    }, [])

    const position = [
        [0, 0],
        [-1, 1.8],
        [1, -1.8],
        [1, 1.8],
        [-1, -1.8]
    ]

    const bounds = new LatLngBounds([-1, -1.8], [1, 1.8])

    return (
        <Wrapper altura={getMinMainHeight()}>
            {isReady && (
                <MapContainer doubleClickZoom={false} closePopupOnClick={false} dragging={false} trackResize={false} zoomSnap={false} center={actualLocation ? [actualLocation.lat, actualLocation.long] : position[0]} boundsOptions={{padding: point(0,0)}} bounds={latLngBounds(latLng(-1,-1.8),latLng(1,1.8))} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle
                        center={[0,0]}
                        pathOptions={{ color: '#34455D', fillColor: '#34455D', fillOpacity: '#34455D' }}
                        radius={100000000000000}
                    />
                    <ImageOverlay
                        url={AvatarMapa?.src}
                        bounds={bounds}
                        zIndex={201}
                    />
                    <LocationMarker actualLocation={actualLocation} />
                </MapContainer>
            )}
        </Wrapper>
    )
}

Map.defaultProps = {
    actualLocation: {
        lat: 0,
        long: 0
    }
}

export default Map