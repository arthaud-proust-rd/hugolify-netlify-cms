// Available collections
import settings from './settings.js'

// Types
import col_posts from './content/posts.js';
import col_categories from './content/categories.js';
import col_authors from './content/authors.js';
import col_projects from './content/projects.js';
import col_types from './content/types.js';
import col_casestudies from './content/casestudies.js';
import col_publications from './content/publications.js';
import col_pages from './content/pages.js';
import col_indexes from './content/indexes.js';

// Data
import config from './data/config.js';

// add selected collections
const selectedCollections = [];
settings.forEach(element => {
    if (settings.includes(element)) {
        selectedCollections.push(eval('col_' + element));
    }
});

// add required collections
selectedCollections.push(col_indexes);
selectedCollections.push(col_pages);
selectedCollections.push(config);

export const collections = selectedCollections;
export default collections;
