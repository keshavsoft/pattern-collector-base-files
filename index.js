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

const narrationJson = () => {
    return latestModule.narrationJson;
};

const getTemplatePath = () => {
    return latestModule.getTemplatePath;
};

const apiVersion = v;

export {
    extractRegex, fileNamesJson, outputStructureJson,
    apiVersion, narrationJson, getTemplatePath
};