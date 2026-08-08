// 1. Using the Latest Version (dynamically resolved at root index.js)
// Root exports wrap properties in getter functions.
import { 
    extractRegex as latestExtract, 
    fileNamesJson as latestFileNames, 
    outputStructureJson as latestOutputStructure, 
    apiVersion as latestApiVersion 
} from '../../index.js';

// 2. Using an Old Version (imported directly from its directory under bin/)
// Direct exports expose properties as raw objects.
import { 
    extractRegex as v3Extract, 
    fileNamesJson as v3FileNames, 
    outputStructureJson as v3OutputStructure, 
    apiVersion as v3ApiVersion 
} from '../../bin/v3/index.js';

console.log("=== Latest Version (Root) ===");
console.log("API Version:", latestApiVersion);
console.log("extractRegex:", latestExtract());
console.log("fileNamesJson:", latestFileNames());
console.log("outputStructureJson:", latestOutputStructure());
console.log();

console.log("=== Old Version (v3) ===");
console.log("API Version:", v3ApiVersion);
console.log("extractRegex:", v3Extract);
console.log("fileNamesJson:", v3FileNames);
console.log("outputStructureJson:", v3OutputStructure);
