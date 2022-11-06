import { text } from '../partials/text.js'
import { url } from '../partials/url.js'

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