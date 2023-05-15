import { heading } from '../fields/heading.js'
import { quote } from '../fields/quote.js'
import { author } from '../fields/author.js'
import { background } from '../fields/background.js'

export const block_testimonials = {
    name: 'testimonials',
    label: 'Témoignages',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        {
            name: 'items',
            label: 'Témoignages',
            label_singular: 'témoignage',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{quote.title}}',
            fields: [
                quote,
                author
            ]
        },
        background
    ]
}