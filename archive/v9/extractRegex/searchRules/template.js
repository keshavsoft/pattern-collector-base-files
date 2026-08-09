export default {
    npmImport:
        /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"]\s*;?/gm,

    routerImport:
        /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,

    endpointImport:
        /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/end-points\.js['"]\s*;?/gm,

    controllerImport:
        /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,

    routerConsumption:
        /^[ \t]*router\.use\b.*?;/gm,

    httpRoute:
        /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,

    appConsumption:
        /^[ \t]*app\.use\s*\([\s\S]*?\)\s*;?/gm,

    export:
        /^[ \t]*export\s*\{\s*(\w+)\s*\}\s*;?/gm,

    variableDeclaration:
        /^[ \t]*const\b[\s\S]*?;/gm
};