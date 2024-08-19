import { Line } from "react-chartjs-2";
import Layout from "../../layout";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import {
  getCountrySpecificCovidData,
  getCovidCasesByDate,
} from "../../services/chart-map-service";
import _ from "lodash";
import { getLineGraphDetails } from "../utils";
import Loader from "../../components/loader";
import CovidMap from "../../components/leaflet-map";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); // Need to register inorder to work properly

const CasesChart: React.FC = () => {
  const {
    data: covidCases,
    isLoading: covidCaseByDateLoading,
    isError: covidCaseByDateError,
  } = useQuery({
    queryKey: ["covidCasesByDate"],
    queryFn: getCovidCasesByDate,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 24 * 24, // the data will be cached for this much amount of time
  });

  const {
    data: countrySpecificCovidCases = [],
    isLoading: countrySpecificCovidCaseLoading,
    isError: countrySpecificCovidCaseError,
  } = useQuery({
    queryKey: ["counrtySpecificCovidCases"],
    queryFn: getCountrySpecificCovidData,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 24 * 24,
  });

  const totalCases = _.get(covidCases, "cases");
  const deaths = _.get(covidCases, "deaths");
  const recovered = _.get(covidCases, "recovered");
  const data = getLineGraphDetails({ total: totalCases, recovered, deaths });

  return (
    <Layout>
      <div className="mb-28">
        {covidCaseByDateLoading || countrySpecificCovidCaseLoading ? (
          <Loader />
        ) : (
          <>
            <div className="text-center md:text-2xl text-base p-3 font-semibold bg-[rgba(0,0,0,0.8)] text-[rgba(255,255,255,0.88)] mb-8">
              Charts And Maps
            </div>
            <div className="m-6">
              <div>
                <p className="my-8 font-bold text-2xl">Line Graph</p>
                <Line data={data} /> {/* Line Graph */}
              </div>
              {/* Country Map*/}
              <CovidMap countryList={countrySpecificCovidCases} />
            </div>
          </>
        )}
        {(covidCaseByDateError || countrySpecificCovidCaseError) && (
          <p>Error while fetching the covid data</p>
        )}
      </div>
    </Layout>
  );
};

export default CasesChart;
