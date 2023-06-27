import { links } from '../fields/links.js'
import { description } from '../fields/description.js'
import { text_markdown } from '../fields/text-markdown.js'
import { state } from '../fields/state.js'
import { image_src } from '../fields/image-src.js'
import { twitter } from '../fields/twitter.js'

const config = {
    name: 'config',
    label: 'Config',

    editor: { preview: false },
    
    i18n: {
        structure: 'single_file'
    },
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
            i18n: 'duplicate',
            fields: [
                links
            ]
        },
        {
            name: 'top',
            label: 'Bannière d’information en haut du site',
            file: 'data/top.yml',
            i18n: true,
            fields: [
                text_markdown,
                state
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
        },
        {
            name: 'socials',
            label: 'SEO: Réseaux sociaux',
            file: 'config/_default/social.yaml',
            i18n: true,
            fields: [
                twitter
            ]
        },
        {
            name: 'analytics',
            label: 'Scripts analytics',
            file: 'config/production/config.yaml',
            i18n: 'duplicate',
            fields: [
                {
                    name: 'googleAnalytics',
                    label: 'Google Analytics (G4)',
                    widget: 'string',
                    hint: 'G-MEASUREMENT_ID',
                    i18n: 'duplicate'
                }
            ]
        }

    ]

}

export default config