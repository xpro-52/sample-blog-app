import { format } from "date-fns";

const DATETIME_FORMAT = "yyyy-MM-dd HH:mm:ss";

export function currDatetime(formatString = DATETIME_FORMAT) {
  return format(new Date(), formatString);
}
