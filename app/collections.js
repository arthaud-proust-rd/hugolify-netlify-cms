// Available collections
import { availableCollections } from './settings/available-collections.js';

// Types
import col_posts from './content/posts.js';
import col_categories from './content/categories.js';
import col_tags from './content/tags.js';
import col_authors from './content/authors.js';
import col_projects from './content/projects.js';
import col_types from './content/types.js';
import col_casestudies from './content/casestudies.js';
import col_publications from './content/publications.js';
import col_pages from './content/pages.js';
import col_indexes from './content/indexes.js';

// Data
import config from './data/config.js';

const selectedCollections = [];

// add mandory collections
selectedCollections.push(col_indexes);
selectedCollections.push(col_pages);

// add selected collections
availableCollections.forEach(element => {
    if (availableCollections.includes(element)) {
        selectedCollections.push(eval('col_' + element));
    }
});

// add config
selectedCollections.push(config);

export const collections = selectedCollections;
export default collections;
