import searchRules from './searchRules.js';
import parseRules from './parseRules.js';
import variablesConnection from './variablesConnection.js';
import reverseTemplates from './reverseTemplates.js';
import toInsertIndex from './toInsertIndex.js';

export default {
    version: "2.1",
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