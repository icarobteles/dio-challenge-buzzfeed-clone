import {
  ONE_DAY_IN_MILLISECONDS,
  ONE_HOUR_IN_MILLISECONDS,
  ONE_MINUTE_IN_MILLISECONDS,
  ONE_MONTH_IN_MILLISECONDS,
  ONE_SECOND_IN_MILLISECONDS,
  ONE_YEAR_IN_MILLISECONDS
} from "../constants";
import { calculateTimeDifference } from "./calculateTimeDifference";

describe("Util Function: calculateTimeDifference", () => {
  let now: Date;

  beforeAll(() => {
    now = new Date();
  });

  it("should return the difference of one year in singular", () => {
    const oneYearAgo = new Date(now.getTime() - ONE_YEAR_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneYearAgo);
    expect(differenceTime).toBe("há 1 ano");
  });

  it("should return the difference of more than one year in the plural", () => {
    const twoYearsAgo = new Date(now.getTime() - 2 * ONE_YEAR_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(twoYearsAgo);
    expect(differenceTime).toBe("há 2 anos");
  });

  it("should return the difference of one month in singular", () => {
    const oneMonthAgo = new Date(now.getTime() - ONE_MONTH_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneMonthAgo);
    expect(differenceTime).toBe("há 1 mês");
  });

  it("should return the difference of more than one month in the plural", () => {
    const twoMonthsAgo = new Date(
      now.getTime() - 2 * ONE_MONTH_IN_MILLISECONDS
    );
    const differenceTime = calculateTimeDifference(twoMonthsAgo);
    expect(differenceTime).toBe("há 2 meses");
  });

  it("should return the difference of one day in singular", () => {
    const oneDayAgo = new Date(now.getTime() - ONE_DAY_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneDayAgo);
    expect(differenceTime).toBe("há 1 dia");
  });

  it("should return the difference of more than one day in the plural", () => {
    const twoDaysAgo = new Date(now.getTime() - 2 * ONE_DAY_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(twoDaysAgo);
    expect(differenceTime).toBe("há 2 dias");
  });

  it("should return the difference of one hour in singular", () => {
    const oneHourAgo = new Date(now.getTime() - ONE_HOUR_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneHourAgo);
    expect(differenceTime).toBe("há 1 hora");
  });

  it("should return the difference of more than one hour in the plural", () => {
    const twoHoursAgo = new Date(now.getTime() - 2 * ONE_HOUR_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(twoHoursAgo);
    expect(differenceTime).toBe("há 2 horas");
  });

  it("should return the difference of one minute in singular", () => {
    const oneMinuteAgo = new Date(now.getTime() - ONE_MINUTE_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneMinuteAgo);
    expect(differenceTime).toBe("há 1 minuto");
  });

  it("should return the difference of more than one minute in the plural", () => {
    const twoMinutesAgo = new Date(
      now.getTime() - 2 * ONE_MINUTE_IN_MILLISECONDS
    );
    const differenceTime = calculateTimeDifference(twoMinutesAgo);
    expect(differenceTime).toBe("há 2 minutos");
  });

  it("should return the difference of one second in singular", () => {
    const oneSecondAgo = new Date(now.getTime() - ONE_SECOND_IN_MILLISECONDS);
    const differenceTime = calculateTimeDifference(oneSecondAgo);
    expect(differenceTime).toBe("há 1 segundo");
  });

  it("should return the difference of more than one second in the plural", () => {
    const twoSecondsAgo = new Date(
      now.getTime() - 2 * ONE_SECOND_IN_MILLISECONDS
    );
    const differenceTime = calculateTimeDifference(twoSecondsAgo);
    expect(differenceTime).toBe("há 2 segundos");
  });
});
