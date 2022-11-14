import { background } from '../fields/background.js'
import { title } from '../fields/title.js'
import { text_markdown } from '../fields/text-markdown.js'

export const block_paragraph = {
    name: 'paragraph',
    label: 'Paragraphe',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        text_markdown,
        background
    ]
}