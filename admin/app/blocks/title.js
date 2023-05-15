import { heading } from '../fields/heading.js'
import { background } from '../fields/background.js'

export const block_title = {
    name: 'title',
    label: 'Titre',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        background
    ]
}