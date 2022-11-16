import { section } from '../fields/section.js'
import { title } from '../fields/title.js'
import { count } from '../fields/count.js'
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
        count,
        background
    ]
}