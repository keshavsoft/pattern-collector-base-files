import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fileNamesJson from './fileNames.json' with {type: 'json'};

const startFunc = (inFileType) => {
    if (!(inFileType in fileNamesJson)) {
        return false;
    };

    const getTemplatePath = path.join(__dirname, "template", inFileType);

    return getTemplatePath;
};

export default startFunc;
