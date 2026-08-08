import fileNamesJson from "../../fileNames.json" with { type: "json" };
import template from "./template.js";

const searchRules = () => {
    const output = {};

    for (const [stageKey, stage] of Object.entries(fileNamesJson)) {
        if (stageKey === "version") continue;

        output[stageKey] = {};

        for (const ruleName of stage.searchRules ?? []) {
            if (template[ruleName]) {
                output[stageKey][ruleName] = template[ruleName];
            }
        }
    }

    return output;
};

export default searchRules;