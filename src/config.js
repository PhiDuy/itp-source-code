var lodash = require("lodash");

const base = {
	dateDisplay: "MMMM D, YYYY",
	dateFormat: "YYYY-MM-DD",
	datetimeFormat: "YYYY-MM-DD HH:mm:ss",
	lang: "vn",
	logging: "INFO", //level INFO/TRACE/DEBUG
};

const env = {
	development: {
		logging: "DEBUG",
		apiBaseURL: "http://uit-backend.70hsv.tk/api",
		apiURL: "http://uit-backend.70hsv.tk/api",
	},
	stage: {
		apiBaseURL: "http://uit-backend.70hsv.tk/api",
		apiURL: "http://uit-backend.70hsv.tk/api",
	},
	production: {
		apiBaseURL: "http://uit-backend.70hsv.tk/api",
		apiURL: "http://uit-backend.70hsv.tk/api",
	},
	onLocal: {
		apiBaseURL: "http://localhost:2222",
		apiURL: "http://localhost:2222",
	},
};

const envConfig = lodash.get(process.env, "REACT_APP_NODE_ENV", "stage");

const configsExport = { ...base, ...env[envConfig] };
const isDebug = configsExport.logging === "DEBUG" ? true : false;

export default {
	...configsExport,
	isDebug,
};

export const TITLE = "";
export const DESCRIPTION = "";
export const IMAGE = "";
