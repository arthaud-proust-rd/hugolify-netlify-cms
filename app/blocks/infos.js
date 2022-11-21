import { material_icons } from '../fields/material-icons.js'
import { image } from '../fields/image.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'
import { background } from '../fields/background.js'

export const block_infos = {
    name: 'infos',
    label: 'Informations en colonne',
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
            label: 'Infos',
            label_singular: 'info',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                material_icons,
                image,
                title,
                text
            ]
        },
        background
    ]
}