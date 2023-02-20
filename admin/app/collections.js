// Config
import config from './config.js';

// Available collections
import { availableCollections } from './settings/available-collections.js';

// Collections
let filesToImport = [];
let selectedCollections = [];

// add mandory collections
filesToImport.push('./content/indexes.js');
filesToImport.push('./content/pages.js');
selectedCollections = [{},{}];

// add selected collections
availableCollections.forEach(element => {
    let file = './content/' + element + '.js';
    filesToImport.push(file);
    selectedCollections.push({});
});

// add data
filesToImport.push('./data/config.js');
selectedCollections.push({});

// Import and init
const countFilesToImport = filesToImport.length;
let i = 0;
for (const file of filesToImport) {
    import(file).then((module) => {
        // add collections with order respect
        let index = filesToImport.indexOf(file);
        selectedCollections.splice(index, 1, module.default);
        // Init
        i += 1;
        if (i === countFilesToImport) {
            config.collections = selectedCollections;
            window.initCMS({ config });
        }
    });
}