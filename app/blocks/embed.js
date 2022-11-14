import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { embed } from '../fields/embed.js'

export const block_embed = {
    name: 'embed',
    label: 'Embed',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        text,
        embed
    ]
}