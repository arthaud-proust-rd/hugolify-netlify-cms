import { section } from '../fields/section.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { count } from '../fields/count.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_latest = {
    name: 'latest',
    label: 'Derniers items (news, projets…)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        section,
        title,
        text,
        count,
        show_more,
        background
    ]
}