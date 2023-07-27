import moment from "moment";
import { DateFormat } from "../../common/constants/date-format";

const convertToDate = (dateTime?: Date, fromFormat?: string) =>
  moment(dateTime, fromFormat);

const parse = (dateTime: Date, fromFormat: string, toFormat: string) =>
  convertToDate(dateTime, fromFormat).format(toFormat);

export const parseRequestDate = (
  dateTime: Date,
  toFormat = DateFormat.YYYY_MM_DD
) => {
  return parse(dateTime, DateFormat.YYYY_MM_DD, toFormat);
};

export const getWeekBeforeTodayPeriod = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return parseRequestDate(date);
};
