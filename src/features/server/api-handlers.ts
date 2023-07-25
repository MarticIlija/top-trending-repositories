import axios from "axios";
import { getWeekBeforePeriod } from "../../framework/date-time/date-time";
import { QueryParameters, SearchParameters } from "../../api";
import { OrderToStringMap } from "../../common/mappers/order-to-string-mapper";
import { Order } from "../../common/enums/Order";

const getUrl = ({ language, order = Order.DESCENDING }: SearchParameters) => {
  const date = getWeekBeforePeriod();
  const searchOrder = OrderToStringMap[order];
  let url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=${searchOrder}`;
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
