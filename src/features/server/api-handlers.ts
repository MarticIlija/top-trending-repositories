import axios from "axios";
import { getWeekBeforeTodayPeriod } from "../../framework/date-time/date-time";
import { QueryParameters, SearchParameters } from "../../api";
import { OrderToStringMap } from "../../common/mappers/order-to-string-mapper";
import { Order } from "../../common/enums/Order";

const getUrl = ({ order = Order.DESCENDING, page }: SearchParameters) => {
  const date = getWeekBeforeTodayPeriod();
  const searchOrder = OrderToStringMap[order];
  return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=${searchOrder}&per_page=30&page=${page}`;
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
