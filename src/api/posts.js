import config from "../config";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}/guests`;

export function getPostsByYear(data) {
  const endpoint = `${baseEndpoint}/posts?time=${data.time}&page=${data.page}&limit=10`;
  return request(endpoint, "GET");
}