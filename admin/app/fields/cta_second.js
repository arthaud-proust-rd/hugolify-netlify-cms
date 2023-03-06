import { text } from '../fields/text.js'
import { url } from '../fields/url.js'
import { blank } from '../fields/blank.js'

export const cta_second = {
    name: 'cta_second',
    label: 'Second bouton',
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