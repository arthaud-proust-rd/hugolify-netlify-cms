import { background } from '../fields/background.js'
import { title } from '../fields/title.js'
import { count } from '../fields/count.js'

export const block_latestprojects = {
    name: 'latest-projects',
    label: 'Derniers projets',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        count,
        background
    ]
}