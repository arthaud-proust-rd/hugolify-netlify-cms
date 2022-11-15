import { links } from '../fields/links.js'
import { description } from '../fields/description.js'
import { image_src } from '../fields/image-src.js'

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
            fields: [
                links
            ]
        },
        {
            name: 'secondary',
            label: 'Menu secondaire',
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'legal',
            label: 'Menu légal (mentions, politiques…)',
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'social',
            label: 'Menu réseaux sociaux',
            file: 'data/menu/social.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'seo',
            label: 'SEO',
            file: 'data/seo.yml',
            i18n: true,
            fields: [
                { name: 'title', label: 'Nom du site', widget: 'string', i18n: true },
                description,
                image_src
            ]
        }

    ]

}

export default config