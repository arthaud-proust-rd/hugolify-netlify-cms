import { title } from '../fields/title.js'
import { background } from '../fields/background.js'

export const block_title = {
    name: 'title',
    label: 'Titre',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        background
    ]
}