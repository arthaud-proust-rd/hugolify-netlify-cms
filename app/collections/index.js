// Types
import col_posts from './types/posts.js';
import col_categories from './types/categories.js';
import col_authors from './types/authors.js';
import col_projects from './types/projects.js';
import col_types from './types/types.js';
// import col_publications from './types/publications.js';
import col_pages from './types/pages.js';

import col_indexes from './types/indexes.js';

// Datas
import config from './datas/config.js';

export const collections = [
    col_posts,
    col_categories,
    col_authors,
    col_projects,
    col_types,
    // col_publications,
    col_indexes,
    col_pages,
    config
]

export default collections