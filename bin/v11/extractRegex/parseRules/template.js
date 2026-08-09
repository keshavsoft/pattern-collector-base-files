export default {
    npmImport: {
        nParts: 2,
        parseRegex:
            /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
        template: "import {0} from '{1}';"
    },

    routerImport: {
        nParts: 2,
        parseRegex:
            /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
        reverseTemplate:
            `import { router as {0} } from './{1}/routes.js';`
    },

    appConsumption: {
        nParts: 2,
        parseRegex:
            /app\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
        reverseTemplate:
            `app.use("/{0}", {1});`
    },

    routerConsumption: {
        nParts: 2,
        parseRegex:
            /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
        reverseTemplate:
            `router.use("/{0}", {1});`
    },

    endpointImport: {
        nParts: 2,
        parseRegex:
            /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
        reverseTemplate:
            `import { router as {0} } from './{1}/end-points.js';`
    },

    controllerImport: {
        nParts: 2,
        parseRegex:
            /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/
    },

    httpRoute: {
        nParts: 3,
        parseRegex:
            /router\.(get|post|put|delete)\(\s*['"]([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
    },

    httpRouteSimple: {
        nParts: 2,
        parseRegex:
            /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
    },

    export: {
        parseRegex: ""
    }
};