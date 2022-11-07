import { text } from '../fields/text.js'
import { url } from '../fields/url.js'

export const cta = {
    name: 'cta',
    label: 'Bouton',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        text,
        url
    ]
}