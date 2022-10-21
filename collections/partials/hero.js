import { image } from '../partials/image.js'

export const hero = {
    name: 'hero',
    label: 'Hero',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        {
            name: 'title',
            label: 'Titre',
            widget: 'string',
            i18n: true
        },
        {
            name: 'text',
            label: 'Texte',
            widget: 'string',
            required: false,
            i18n: true
        },
        {
            name: 'cta',
            label: 'CTA',
            widget: 'object',
            required: false,
            i18n: true,
            fields: [
                {
                    name: 'text',
                    label: 'Texte',
                    widget: 'string',
                    i18n: true
                },
                {
                    name: 'url',
                    label: 'URL',
                    widget: 'string',
                    i18n: true
                }
            ]
        },
        image
    ]
}