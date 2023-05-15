import { heading } from '../fields/heading.js'
import { persons } from '../fields/persons.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedpersons = {
    name: 'selected-persons',
    label: 'Selection de personnes',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        { name: 'section', default: 'persons', widget: 'hidden' },
        persons,
        show_more,
        background
    ]
}