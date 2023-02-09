import { title } from '../fields/title.js'
import { casestudies } from '../fields/casestudies.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedcasestudies = {
    name: 'selected-casestudies',
    label: 'Selection de cas d’études',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        { name: 'section', default: 'casestudies', widget: 'hidden' },
        casestudies,
        show_more,
        background
    ]
}