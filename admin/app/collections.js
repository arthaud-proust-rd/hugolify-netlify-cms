// Hugolify CMS Config
import config from './config.js';

import { availableCollections } from './settings/available-collections.js';

async function importSequentially(importsList) {
    const collections = [];

    for (const filePath of importsList) {
        const module = await filePath;
        collections.push(module.default);
    }

    return collections;
}

importSequentially([
    import('./content/indexes.js'),
    import('./content/pages.js'),
    ...availableCollections.map((element) => import(`./content/${element}.js`)),
    import('./data/config.js')
]).then(collections=>{
    config.collections = collections;
    window.initCMS({ config });
})
