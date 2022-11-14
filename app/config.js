import collections from './collections.js';

export const config = {
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

export default config
