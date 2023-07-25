import { Order } from "../enums/Order";

export const OrderToStringMap: Record<string, string> = {
  [Order.ASCENDING]: "asc",
  [Order.DESCENDING]: "desc",
};
