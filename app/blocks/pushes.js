import { image } from '../fields/image.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { cta } from '../fields/cta.js'
import { column } from '../fields/column.js'
import { background } from '../fields/background.js'

export const block_pushes = {
    name: 'pushes',
    label: 'Pushes en colonne',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        text,
        column,
        {
            name: 'items',
            label: 'Pushes',
            label_singular: 'push',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                image,
                title,
                text,
                cta
            ]
        },
        background
    ]
}