import searchRules from './searchRules/index.js';
import parseRules from './parseRules/index.js';
import variablesConnection from './variablesConnection/index.js';
import reverseTemplates from './reverseTemplates/index.js';
import toInsertIndex from './toInsertIndex/index.js';

export default {
    version: "7.1",
    files: [
        "fromAppJs",
        "fromRoutesJs",
        "fromRoutesJsEnd"
    ],
    searchRules,
    parseRules,
    variablesConnection,
    reverseTemplates,
    toInsertIndex
};