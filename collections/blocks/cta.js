import { text } from '../partials/text.js'

export const cta = {
    name: 'cta',
    label: 'Bouton',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        text,
        {
            name: 'url',
            label: 'URL',
            widget: 'string',
            i18n: true
        }
    ]
}