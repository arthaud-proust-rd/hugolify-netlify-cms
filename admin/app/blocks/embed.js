import { heading } from '../fields/heading.js'
import { embed } from '../fields/embed.js'
import { background } from '../fields/background.js'

export const block_embed = {
    name: 'embed',
    label: 'Embed (iframe)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        heading,
        embed,
        background
    ]
}