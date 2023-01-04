import { direction } from '../fields/direction.js'
import { title } from '../fields/title.js'
import { text_markdown } from '../fields/text-markdown.js'
import { cta } from '../fields/cta.js'
import { image } from '../fields/image.js'
import { background } from '../fields/background.js'

export const block_editorial = {
    name: 'editorial',
    label: 'Editorial (contenu et image)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
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