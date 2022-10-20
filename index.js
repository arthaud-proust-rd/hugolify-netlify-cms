// Sections
import posts from './collections/sections/posts.js';
import categories from './collections/sections/categories.js';
import authors from './collections/sections/authors.js';
import projects from './collections/sections/projects.js';
import types from './collections/sections/types.js';
import pages from './collections/sections/pages.js';

import indexes from './collections/indexes.js';

// Datas
import menu from './collections/datas/menu.js';
import config from './collections/datas/config.js';


// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true
const { CMS, initCMS: init } = window

init({
    config: {
        backend: {
            name: 'git-gateway',
            branch: 'main'
        },

        load_config_file: false,
        local_backend: true,

        // Internationalisation
        locale: 'fr',

        // files
        media_folder: 'assets/images/uploads',
        public_folder: '/images/uploads',

        // slug
        slug: {
            encoding: 'ascii',
            clean_accents: true,
            sanitize_replacement: '-'
        },

        // collections
        collections: [
            posts,
            categories,
            authors,
            projects,
            types,
            indexes,
            pages,
            menu,
            config
        ]
    }
})