import { 
    extractRegex, 
    fileNamesJson, 
    outputStructureJson, 
    apiVersion 
} from '../../index.js';

console.log("=== Latest Version (Root) ===");
console.log("API Version:", apiVersion);
console.log("extractRegex:", extractRegex());
console.log("fileNamesJson:", fileNamesJson());
console.log("outputStructureJson:", outputStructureJson());
