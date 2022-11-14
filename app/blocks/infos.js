import { material_icons } from '../fields/material-icons.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'

export const block_infos = {
    name: 'infos',
    label: 'Informations en colonne',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        text,
        column,
        {
            name: 'items',
            label: 'Infos',
            label_singular: 'Info',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            fields: [
                material_icons,
                title,
                text
            ]
        }
    ]
}