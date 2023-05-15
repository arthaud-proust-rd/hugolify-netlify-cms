import { surtitle } from './surtitle.js'
import { title } from './title.js'
import { text } from './text.js'

export const heading = {
    name: 'heading',
    label: 'Heading',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        surtitle,
        title,
        text
    ]
}