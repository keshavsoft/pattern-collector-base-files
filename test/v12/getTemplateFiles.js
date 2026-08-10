import fs from "fs";

import {
    getTemplateFiles,
} from '../../index.js';

const templatePath = getTemplateFiles("fromAppJs1");

// fs.cpSync(templatePath, ".", { recursive: true });

console.log("templatePath:", templatePath);
