import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    name: "Dhaka",
    position: [23.8103, 90.4125],
  },
  {
    name: "Chattogram",
    position: [22.3569, 91.7832],
  },
  {
    name: "Sylhet",
    position: [24.8949, 91.8687],
  },
  {
    name: "Rajshahi",
    position: [24.3745, 88.6042],
  },
  {
    name: "Khulna",
    position: [22.8456, 89.5403],
  },
  {
    name: "Barishal",
    position: [22.701, 90.3535],
  },
  {
    name: "Rangpur",
    position: [25.7439, 89.2752],
  },
  {
    name: "Mymensingh",
    position: [24.7471, 90.4203],
  },
];

const Coverage = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        Delivery Coverage
      </h2>

      <div className="max-w-6xl mx-auto">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[500px] rounded-xl shadow-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map(
            (location, index) => (
              <Marker
                key={index}
                position={
                  location.position
                }
                icon={customIcon}
              >
                <Popup>
                  Delivery Available in{" "}
                  {location.name}
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;