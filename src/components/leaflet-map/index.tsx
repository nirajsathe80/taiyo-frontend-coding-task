import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ICovidCaseByCountry } from "../../types";
import _ from "lodash";

interface CovidMapProps {
  countryList: ICovidCaseByCountry[] | [];
}

const CovidMap = ({ countryList }: CovidMapProps) => {
  return (
    <div className="mt-10">
      <p className=" font-bold text-2xl mb-10">Leaflet Map</p>
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {_.map(countryList, (country) => {
          const {
            active,
            recovered,
            deaths,
            country: cntry,
            countryInfo,
          } = country;
          return (
            <Marker
              key={countryInfo._id}
              position={[countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <img src={countryInfo.flag} className="h-6 mb-1" />
                  <h3>{cntry}</h3>
                  <p>
                    <strong>Active Cases:</strong> {active}
                  </p>
                  <p>
                    <strong>Recovered:</strong> {recovered}
                  </p>
                  <p>
                    <strong>Deaths:</strong> {deaths}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CovidMap;
