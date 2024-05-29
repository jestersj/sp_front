import React, {useState} from 'react';
import {FeatureGroup, MapContainer, TileLayer} from "react-leaflet";
import {EditControl} from 'react-leaflet-draw'

const MapComponent = () => {
    const position = [55.441332, 37.369336]

    const [mapLayers, setMapLayers] = useState([])

    const _onCreate = (e) => {

        const { layerType, layer } = e;
        if (layerType === "polygon") {
            const { _leaflet_id } = layer;

            setMapLayers((layers) => [
                ...layers,
                { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
            ]);
        }
    };

    const _onEdited = (e) => {
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => {
            setMapLayers((layers) =>
                layers.map((l) =>
                    l.id === _leaflet_id
                        ? { ...l, latlngs: [ ...editing.latlngs[0] ] }
                        : l
                )
            );
        });
    };

    const _onDeleted = (e) => {
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <FeatureGroup>
                    <EditControl
                        position={'topright'}
                        onCreated={_onCreate}
                        onEdited={_onEdited}
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle: false,
                            polyline: false,
                            marker: false,
                            circle: false,
                            circlemarker: false,
                        }}
                    />
                </FeatureGroup>

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>

            <pre>
                {JSON.stringify(mapLayers, 0, 2)}.
            </pre>
        </div>
    );
};

export default MapComponent;