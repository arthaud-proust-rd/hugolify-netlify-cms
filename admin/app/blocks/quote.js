import { quote } from '../fields/quote.js'
import { author } from '../fields/author.js'
import { background } from '../fields/background.js'

export const block_quote = {
    name: 'quote',
    label: 'Citation',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{quote}}',
    fields: [
        quote,
        author,
        background
    ]
}