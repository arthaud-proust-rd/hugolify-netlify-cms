import { text } from '../fields/text.js'
import { url } from '../fields/url.js'
import { blank } from '../fields/blank.js'

export const cta = {
    name: 'cta',
    label: 'Bouton',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{text}}',
    fields: [
        text,
        url,
        blank
    ]
}