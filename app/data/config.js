import { links } from '../fields/links.js'
import { description } from '../fields/description.js'

const config = {
    name: 'config',
    label: 'Config',

    editor: { preview: false },

    files: [

        {
            name: 'primary',
            label: 'Menu principal',
            file: 'data/menu/primary.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'secondary',
            label: 'Menu secondaire',
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'legal',
            label: 'Menu légal (mentions, politiques…)',
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'social',
            label: 'Menu réseaux sociaux',
            file: 'data/menu/social.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'seo',
            label: 'SEO',
            file: 'data/seo.yml',
            i18n: true,
            fields: [
                { name: 'title', label: 'Nom du site', widget: 'string', i18n: true },
                description,
                { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' }
            ]
        }

    ]

}

export default config