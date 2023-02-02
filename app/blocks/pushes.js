import { image } from '../fields/image.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column_simple } from '../fields/column-simple.js'
import { cta } from '../fields/cta.js'
import { offset } from '../fields/offset.js'
import { background } from '../fields/background.js'

export const block_pushes = {
    name: 'pushes',
    label: 'Blocs push (en colonne)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text,
        column_simple,
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
                offset,
                title,
                text,
                cta
            ]
        },
        background
    ]
}