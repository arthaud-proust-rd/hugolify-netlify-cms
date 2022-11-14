// Types
import col_posts from './content/posts.js';
import col_categories from './content/categories.js';
import col_authors from './content/authors.js';
import col_projects from './content/projects.js';
import col_types from './content/types.js';
// import col_publications from './content/publications.js';
import col_pages from './content/pages.js';
import col_indexes from './content/indexes.js';

// Data
import config from './data/config.js';

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