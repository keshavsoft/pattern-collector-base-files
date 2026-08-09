export default {
    fromAppJs: {
        // import express from "express";
        importNpmRegex:
            /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"]\s*;?/gm,

        // import { router as routerFromapi } from "./api/routes.js";
        importRegex:
            /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,

        // app.use('/api', routerFromapi);
        consumptionRegex:
            /^[ \t]*app\.use\s*\([\s\S]*?\)\s*;?/gm,

        // export { router };
        exportRegex:
            /^[ \t]*export\s*\{\s*(\w+)\s*\}\s*;?/gm,

        // setupRoutes(app);
        // const { port } = startServer(app);
        variablesDeclareHere1:
            /setupRoutes\s*\(\s*app\s*\)\s*;[\s\S]*?const\s*\{\s*port\s*\}\s*=\s*startServer\s*\(\s*app\s*\)\s*;/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    fromRoutesJs: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.use\b.*?;/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    fromRoutesJsEnd: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/end-points\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.use\b.*?;/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    fromEndPointsJs: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    tableGetShowAll: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    tableGetFind: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    tableGetShowAll: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    tableGetShowAll: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    },
    tablePostShowAll: {
        importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
        importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
        consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
        exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
        variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
    }
};
