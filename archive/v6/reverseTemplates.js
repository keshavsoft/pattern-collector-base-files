export default {
    fromRoutesJs: {
        importRegex: `import { router as {0} } from './{1}/routes.js';`,
        consumptionRegex: `router.use("/{1}", {0});`
    },
    fromAppJs: {
        importRegex: `import { router as {0} } from './{1}/routes.js';`,
        consumptionRegex: `app.use("/{1}", {0});`
    },
    fromRoutesJsEnd: {
        importRegex: `import { router as {0} } from './{1}/end-points.js';`,
        consumptionRegex: `router.use("/{1}", {0});`
    },
    fromEndPointsJs: {
        importNpmRegex: "import {0} from '{1}';",
        importRegex: `import {0} from './{1}/controller.js';`,
        consumptionRegex: `router.get('/{1}', (req, res) => {0}({ req, res, inTablePath: tablePath }));`
    },
    tableGetShowAll: {
        importNpmRegex: "import {0} from '{1}';",
        importRegex: `import {0} from './{1}/controller.js';`,
        consumptionRegex: `router.get('/{1}', (req, res) => {0}({ req, res, inTablePath: tablePath }));`
    },
    tableGetFind: {
        importNpmRegex: "import {0} from '{1}';",
        importRegex: `import {0} from './{1}/controller.js';`,
        consumptionRegex: `router.get('/{1}/:columnName', (req, res) => {0}({ req, res, inTablePath: tablePath }));`
    }
};
