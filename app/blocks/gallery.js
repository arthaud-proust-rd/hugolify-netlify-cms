import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'
import { gallery } from '../fields/gallery.js'
import { background } from '../fields/background.js'

export const block_gallery = {
    name: 'gallery',
    label: 'Galerie d’images',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        text,
        column,
        gallery,
        background
    ]
}