import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'
import { show_gauge } from '../fields/show-gauge.js'
import { show_color } from '../fields/show-color.js'
import { prefix } from '../fields/prefix.js'
import { value_number } from '../fields/value-number.js'
import { suffix } from '../fields/suffix.js'
import { limit } from '../fields/limit.js'
import { background } from '../fields/background.js'

export const block_datas = {
    name: 'datas',
    label: 'Blocs de données (en colonne)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        text,
        column,
        show_gauge,
        show_color,
        {
            name: 'items',
            label: 'Donnée',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                prefix,
                value_number,
                suffix,
                limit,
                title,
                text
            ]
        },
        background
    ]
}