import _ from "lodash";
import { ILineGraphParam } from "../../types";

export function getLineGraphDetails({
  total,
  deaths,
  recovered,
}: ILineGraphParam) {
  const data = {
    labels: _.size(total) > 0 ? Object.keys(total) : [],
    datasets: [
      {
        label: "total-cases",
        data: _.size(total) > 0 ? Object.values(total) : [],
        borderColor: "rgb(168, 50, 158)",
        borderWidth: 0.5,
        tension: 0.1,
        fill: false,
        backgroundColor: "rgb(168, 50, 158)",
      },
      {
        label: "death-cases",
        data: _.size(deaths) > 0 ? Object.values(deaths) : [],
        borderColor: "rgb(50, 168, 82)",
        borderWidth: 0.5,
        tension: 0.1,
        fill: false,
        backgroundColor: "rgb(50, 168, 82)",
      },
      {
        label: "recovered-cases",
        data: _.size(recovered) > 0 ? Object.values(recovered) : [],
        borderColor: "rgb(64, 50, 168)",
        borderWidth: 0.5,
        tension: 0.1,
        fill: false,
        backgroundColor: "rgb(64, 50, 168)",
      },
    ],
  };

  return data;
}
