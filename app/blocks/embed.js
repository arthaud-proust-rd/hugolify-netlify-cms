import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
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
        title,
        text,
        embed,
        background
    ]
}