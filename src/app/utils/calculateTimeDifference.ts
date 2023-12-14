import {
  ONE_DAY_IN_MILLISECONDS,
  ONE_HOUR_IN_MILLISECONDS,
  ONE_MINUTE_IN_MILLISECONDS,
  ONE_MONTH_IN_MILLISECONDS,
  ONE_YEAR_IN_MILLISECONDS
} from "../constants";

export function formatTimeDifference(
  time: number,
  label: string,
  pluralLabel?: string
) {
  pluralLabel = pluralLabel ?? label + "s";
  return `há ${time} ${time === 1 ? label : pluralLabel}`;
}

export function calculateTimeDifference(date: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(date).getTime();

  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(diffInMilliseconds / ONE_MINUTE_IN_MILLISECONDS);
  const hours = Math.floor(diffInMilliseconds / ONE_HOUR_IN_MILLISECONDS);
  const days = Math.floor(diffInMilliseconds / ONE_DAY_IN_MILLISECONDS);
  const months = Math.floor(diffInMilliseconds / ONE_MONTH_IN_MILLISECONDS);
  const years = Math.floor(diffInMilliseconds / ONE_YEAR_IN_MILLISECONDS);

  if (years > 0) {
    return formatTimeDifference(years, "ano");
  } else if (months > 0) {
    return formatTimeDifference(months, "mês", "meses");
  } else if (days > 0) {
    return formatTimeDifference(days, "dia");
  } else if (hours > 0) {
    return formatTimeDifference(hours, "hora");
  } else if (minutes > 0) {
    return formatTimeDifference(minutes, "minuto");
  } else {
    return formatTimeDifference(seconds, "segundo");
  }
}
