import axios from "axios";
import store from "store";
import _ from "lodash";
import { history } from "../stores";
import config from "../config";
import { save, clearAll } from "services/localStoredService";

export const refresh = (requestData, refreshToken) => {
	return axios({
		method: "GET",
		url: `${config.apiBaseURL}/auth/refresh`,
		headers: {
			authorization: refreshToken,
			"Content-Type": "application/json",
		},
	})
		.then(async (res) => {
			const { accessToken } = res.data.message;
			save("accessToken", accessToken);
			const { endpoint, method, data, config } = requestData;
			return request(endpoint, method, data, config, accessToken);
		})
		.catch((err) => {
			// NotificationManager.error("Lỗi", err.stack, 3000);
			clearAll();
			return err;
		});
};

export const handerError = async (error, requestData) => {
	return new Promise(async (resolve, reject) => {
		const status = _.get(error, "response.status");
		if (status < 500 && status >= 400) {
			if (status === 404) {
				return history.push("/404");
			} else {
				return resolve(_.get(error, "response", ""));
			}
		} else {
			return resolve(_.get(error, "response", ""));
		}
	});
};

export const CONTENT_TYPE = {
	form: "application/x-www-form-urlencoded",
	json: "application/json",
};

export const request = (
	endpoint,
	method,
	data,
	config = false,
	accessToken = null
) => {
	return new Promise((resolve, reject) => {
		const getHeaders = (contentType = CONTENT_TYPE.json) => {
			const token = accessToken ? accessToken : store.get("accessToken");
			const header = {
				authorization: token,
				"Content-Type": contentType,
			};
			return header;
		};

		const headers = !config ? getHeaders() : getHeaders(CONTENT_TYPE.form);
		const options = {
			method,
			url: endpoint,
			headers,
			data: method !== "GET" ? data : null,
			params: method === "GET" ? data : null,
		};
		return axios(options)
			.then((res) => {
				return resolve(res);
			})
			.catch(async (error) => {
				try {
					return resolve(
						await handerError(error, {
							endpoint,
							method,
							data,
							config,
						})
					);
				} catch (err) {
					return reject(error);
				}
			});
	});
};
