import { image_src } from '../fields/image-src.js'
import { image_alt } from '../fields/image-alt.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { cta } from '../fields/cta.js'
import { column } from '../fields/column.js'
import { background } from '../fields/background.js'

export const block_pushes = {
    name: 'pushes',
    label: 'Blocs push (en colonne)',
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
                {
                    name: 'image',
                    label: 'Image',
                    widget: 'object',
                    required: false,
                    i18n: true,
                    collapsed: true,
                    fields: [
                        image_src,
                        image_alt,
                        { name: 'logo', label: 'Logo?', widget: 'boolean', required: false, hint: 'Pour centrer l’image dans une case', i18n: 'duplicate' }
                    ]
                },
                title,
                text,
                cta
            ]
        },
        background
    ]
}