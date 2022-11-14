import { title } from './title.js'
import { text } from './text.js'
import { cta } from './cta.js'
import { image } from './image.js'

export const hero = {
    name: 'hero',
    label: 'Hero',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        text,
        cta,
        image
    ]
}