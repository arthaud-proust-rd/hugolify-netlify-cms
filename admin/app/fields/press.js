import { title } from './title.js'
import { url } from './url.js'

export const press = {
    name: 'press',
    label: 'Source de l’article',
    widget: 'object',
    collapsed: false,
    required: false,
    fields: [
        title,
        url
    ]
}