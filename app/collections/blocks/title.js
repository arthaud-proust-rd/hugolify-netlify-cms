import { title } from '../fields/title.js'

export const block_title = {
    name: 'title',
    label: 'Bloc titre',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title
    ]
}