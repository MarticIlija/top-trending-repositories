import { parseRequestDate } from "../framework/date-time/date-time";

const date = new Date("1389.08.02");

test("parseRequestDate", () => {
  expect(parseRequestDate(date)).toBe("1389-08-02");
});
