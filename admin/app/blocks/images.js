import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { images } from '../fields/images.js'
import { background } from '../fields/background.js'

export const block_images = {
    name: 'images',
    label: 'Liste d’images',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text,
        images,
        background
    ]
}