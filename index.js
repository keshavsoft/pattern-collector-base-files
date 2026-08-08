import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

const extractRegex = () => {
    return latestModule.extractRegex;
};

const fileNamesJson = () => {
    return latestModule.fileNamesJson;
};

const outputStructureJson = () => {
    return latestModule.outputStructureJson;
};

const apiVersion = v;

export { extractRegex, fileNamesJson, outputStructureJson, apiVersion };