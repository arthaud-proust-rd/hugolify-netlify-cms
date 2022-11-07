import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { cta } from '../fields/cta.js'
import { image } from '../fields/image.js'

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