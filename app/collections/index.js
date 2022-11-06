// Types
import posts from './types/posts.js';
import categories from './types/categories.js';
import authors from './types/authors.js';
import projects from './types/projects.js';
import types from './types/types.js';
// import publications from './types/publications.js';
import pages from './types/pages.js';

import indexes from './types/indexes.js';

// Datas
import menu from './datas/menu.js';
import config from './datas/config.js';

export const collections = [
    posts,
    categories,
    authors,
    projects,
    types,
    // publications,
    indexes,
    pages,
    menu,
    config
]

export default collections