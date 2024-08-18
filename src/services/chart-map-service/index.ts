import axios from "axios";
import { ICovidCaseByCountry } from "../../types";

const BASE_URL = "https://disease.sh/v3/covid-19";

const ChartAndMapService = {
  getCovidCasesByDate: async () => {
    const response = await axios.get(`${BASE_URL}/historical/all?lastdays=all`);
    const data = await response.data;
    return data;
  },

  getCountrySpecificCovidData: async (): Promise<ICovidCaseByCountry[]> => {
    const response = await axios.get(`${BASE_URL}/countries`);
    const data = await response.data;
    return data;
  },
};

export const { getCovidCasesByDate, getCountrySpecificCovidData } =
  ChartAndMapService;
