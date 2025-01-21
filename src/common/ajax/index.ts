import { request } from "./request";
/**
 *
 * @param params {
 * }
 * @returns Promise
 */
export const fetchEpochRewardCreate = <T>(params: any) => {
  return request.post<T>("/t", params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
