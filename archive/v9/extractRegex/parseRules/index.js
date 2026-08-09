import fileNamesJson from "../../fileNames.json" with { type: "json" };
import template from "./template.js";

const parseRules = () => {
    const output = {};

    for (const [stageKey, stage] of Object.entries(fileNamesJson)) {
        if (stageKey === "version") continue;

        output[stageKey] = {};

        for (const rule of stage.parseRules ?? []) {
            const searchKey = rule?.searchKey;
            const parseKey = rule?.parseKey;

            if (template[searchKey]) {
                output[stageKey][parseKey] = template[searchKey];
            }
        }
    }

    return output;
};

export default parseRules;