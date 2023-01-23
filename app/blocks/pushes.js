import { image } from '../fields/image.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
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
        { 
            name: 'column',
            label: 'Nombre de colonnes',
            widget: 'number',
            min: 1,
            max: 2,
            value_type: 'int',
            default: 1,
            i18n: 'duplicate'
        },
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