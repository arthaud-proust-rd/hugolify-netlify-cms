import { links } from '../fields/links.js'
import { description } from '../fields/description.js'
import { text_markdown } from '../fields/text-markdown.js'
import { state } from '../fields/state.js'
import { image_src } from '../fields/image-src.js'
import { twitter } from '../fields/twitter.js'
import {t} from "../i18n/translater.js";

const config = {
    name: 'config',
    label: t.config.label,

    editor: { preview: false },
    
    i18n: {
        structure: 'single_file'
    },
    files: [

        {
            name: 'primary',
            label: t.config.files.primary,
            file: 'data/menu/primary.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'secondary',
            label: t.config.files.secondary,
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'legal',
            label: t.config.files.legal,
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'social',
            label: t.config.files.social,
            file: 'data/menu/social.yml',
            i18n: 'duplicate',
            fields: [
                links
            ]
        },
        {
            name: 'banner',
            label: t.config.files.banner,
            file: 'data/banner.yml',
            i18n: true,
            fields: [
                text_markdown,
                state
            ]
        },
        {
            name: 'seo',
            label: t.config.files.seo.label,
            file: 'data/seo.yml',
            i18n: true,
            fields: [
                { name: 'title', label: t.config.files.seo.fields.title, widget: 'string', i18n: true },
                description,
                image_src
            ]
        },
        {
            name: 'socials',
            label: t.config.files.social,
            file: 'config/_default/social.yaml',
            i18n: true,
            fields: [
                twitter
            ]
        },
        {
            name: 'analytics',
            label: t.config.files.analytics.label,
            file: 'config/production/config.yaml',
            i18n: 'duplicate',
            fields: [
                {
                    name: 'googleAnalytics',
                    label: t.config.files.analytics.fields.googleAnalytics,
                    widget: 'string',
                    hint: 'G-MEASUREMENT_ID',
                    i18n: 'duplicate'
                }
            ]
        }

    ]

}

export default config