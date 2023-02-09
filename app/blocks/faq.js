import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { text_markdown } from '../fields/text-markdown.js'
import { background } from '../fields/background.js'

export const block_faq = {
    name: 'faq',
    label: 'FAQ',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text,
        {
            name: 'items',
            label: 'Question/Réponse',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                title,
                text_markdown
            ]
        },
        background
    ]
}