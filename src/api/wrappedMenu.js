import config from "../config";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}/guests`;

export function getAllTermsOfUnit(data) {
  const endpoint = `${baseEndpoint}/users`;
  return request(endpoint, "GET");
}

export function getStructureByTerm(data) {
  const endpoint = `${baseEndpoint}/structures?term=${data.term}`;
  return request(endpoint, "GET");
}

export function getPostByYear(data) {
  const endpoint = `${baseEndpoint}/posts?time=${data.time}`;
  return request(endpoint, "GET", data);
}

export function getIntroduce(data) {
  const endpoint = `${baseEndpoint}/introduces`;
  return request(endpoint, "GET");
}

export function getBackground(data) {
  const endpoint = `${baseEndpoint}/background`;
  return request(endpoint, "GET");
}
