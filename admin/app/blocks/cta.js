import { heading } from '../fields/heading.js'
import { cta } from '../fields/cta.js'
import { background } from '../fields/background.js'

export const block_cta =  {
    name: 'cta',
    label: 'Appel à l’action (Boutton)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{cta.text}}',
    fields: [
        heading,
        cta,
        background
    ]
}