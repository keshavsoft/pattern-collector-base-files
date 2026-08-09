import extractRegex from './extractRegex/extractRegex.js';
import fileNamesJson from './fileNames.json' with {type: 'json'};
import outputStructureJson from './outputStructure.json' with {type: 'json'};
import narrationJson from './narration.json' with {type: 'json'};
import getTemplatePath from './getTemplatePath.js';
import getTemplateFiles from './getTemplateFiles.js';

const apiVersion = 'v11';

export {
    extractRegex, fileNamesJson, outputStructureJson,
    apiVersion, narrationJson, getTemplatePath, getTemplateFiles
};