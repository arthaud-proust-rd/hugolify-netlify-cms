import { title } from './title.js'
import { text_markdown } from './text-markdown.js'
import { cta } from './cta.js'
import { cta_second } from './cta_second.js'
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
        text_markdown,
        cta,
        cta_second,
        image
    ]
}