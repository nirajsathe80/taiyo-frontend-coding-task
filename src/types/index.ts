export interface ContatcInitialState {
  contactList: IContact[];
}

export interface FormValue {
  firstName: string;
  lastName: string;
  isActive: string;
}

export interface IContact extends FormValue {
  id: string;
}

export interface ILineGraphParam {
  recovered: Record<string, number>;
  total: Record<string, number>;
  deaths: Record<string, number>;
}

export interface ICovidCaseByCountry {
  country: string;
  cases: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
  active: number;
}

export interface CountryInfo {
  _id: string;
  lat: number;
  long: number;
  flag: string;
}
