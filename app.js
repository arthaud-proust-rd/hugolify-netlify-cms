// This global flag enables manual initialization.
// import CMS, { init } from 'netlify-cms'
const { CMS, initCMS: init } = window

// Import all collections
import collections from './collections/index.js';

// Import all shortcodes for editor
import './editor/index.js';

// Init
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
        collections
    }
})