import { title } from '../fields/title.js'
import { text_markdown } from '../fields/text-markdown.js'
import { grid } from '../fields/grid.js'
import { align } from '../fields/align.js'
import { background } from '../fields/background.js'

export const block_paragraph = {
    name: 'paragraph',
    label: 'Paragraphe',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text_markdown,
        grid,
        align,
        background
    ]
}