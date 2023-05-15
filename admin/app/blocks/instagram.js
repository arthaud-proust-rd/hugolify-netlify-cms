import { heading } from '../fields/heading.js'
import { count } from '../fields/count.js'
import { background } from '../fields/background.js'

export const block_instagram = {
    name: 'instagram',
    label: 'Instagram feed',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        count,
        {
            name: 'token',
            label: 'Access_token provenant d’instagram',
            widget: 'string',
            required: true,
            i18n: 'duplicate'
        },
        background
    ]
}