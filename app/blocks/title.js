import { background } from '../fields/background.js'
import { title } from '../fields/title.js'

export const block_title = {
    name: 'title',
    label: 'Titre',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        background
    ]
}