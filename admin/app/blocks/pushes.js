import { heading } from '../fields/heading.js'
import { image_src } from '../fields/image-src.js'
import { image_alt } from '../fields/image-alt.js'
import { background_color } from '../fields/background-color.js'
import { color } from '../fields/color.js'
import { darken } from '../fields/darken.js'
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
    summary: '{{heading.title}}',
    fields: [
        heading,
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
                title,
                text,
                cta,
                offset,
                {
                    name: 'card',
                    label: 'Texte dans un bloc',
                    widget: 'boolean',
                    default: false,
                    required: false,
                    i18n: 'duplicate'
                },
                background_color,
                color,
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
                        darken
                    ]
                }
            ]
        },
        background
    ]
}