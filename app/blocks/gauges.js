import { background } from '../fields/background.js'
import { value } from '../fields/value.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'

export const block_gauges = {
    name: 'gauges',
    label: 'Statistiques en colonne',
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
            label: 'Statistiques',
            label_singular: 'Statistique',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                value,
                title,
                text
            ]
        },
        background
    ]
}