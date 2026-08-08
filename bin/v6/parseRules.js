export default {
    fromAppJs: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
            reverseTemplate: `import { router as {0} } from './{1}/routes.js';`
        },
        consumptionRegex: {
            nParts: 2,
            parseRegex: /app\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
            reverseTemplate: `app.use("/{0}", {1});`
        },
        exportRegex: ""
    },
    fromRoutesJs: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
            reverseTemplate: `import { router as {0} } from './{1}/routes.js';`
        },
        consumptionRegex: {
            nParts: 2,
            parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
            reverseTemplate: `router.use("/{0}", {1});`
        },
        exportRegex: ""
    },
    fromRoutesJsEnd: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
            reverseTemplate: `import { router as {0} } from './{1}/routes.js';`
        },
        consumptionRegex: {
            nParts: 2,
            parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
            reverseTemplate: `router.use("/{0}", {1});`
        },
        exportRegex: ""
    },
    fromEndPointsJs: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/
        },
        consumptionRegex1: {
            nParts: 2,
            parseRegex: /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        consumptionRegex: {
            nParts: 3,
            parseRegex: /router\.(get|post|put|delete)\(\s*['"]([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        exportRegex: ""
    },
    tableGetShowAll: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/
        },
        consumptionRegex1: {
            nParts: 2,
            parseRegex: /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        consumptionRegex: {
            nParts: 3,
            parseRegex: /router\.(get|post|put|delete)\(\s*['"]([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        exportRegex: ""
    },
    tableGetFind: {
        importNpmRegex: {
            nParts: 2,
            parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
            template: "import {0} from '{1}';"
        },
        importRegex: {
            nParts: 2,
            parseRegex: /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/
        },
        consumptionRegex1: {
            nParts: 2,
            parseRegex: /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        consumptionRegex: {
            nParts: 3,
            parseRegex: /router\.(get|post|put|delete)\(\s*['"]([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
        },
        exportRegex: ""
    }
};
