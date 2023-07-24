import axios from "axios";
import { getWeekBeforePeriod } from "../../framework/date-time/date-time";
import { QueryParameters, SearchParameters } from "../../api";

const getUrl = ({ language, order = "desc" }: SearchParameters) => {
  const date = getWeekBeforePeriod();
  let url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=${order}`;
  if (language) url += `&language=${language}`;
  return url;
};

export const getRepositories = ({ searchParams, setter }: QueryParameters) => {
  const url = getUrl(searchParams);
  axios
    .get(url)
    .then((response) => {
      setter(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
