import { background } from '../fields/background.js'
import { direction } from '../fields/direction.js'
import { title } from '../fields/title.js'
import { text_markdown } from '../fields/text-markdown.js'
import { cta } from '../fields/cta.js'
import { image } from '../fields/image.js'

export const block_editorial = {
    name: 'editorial',
    label: 'Editorial',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        direction,
        title,
        text_markdown,
        cta,
        image,
        background
    ]
}