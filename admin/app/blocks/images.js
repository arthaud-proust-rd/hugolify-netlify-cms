import { heading } from '../fields/heading.js'
import { images } from '../fields/images.js'
import { background } from '../fields/background.js'

export const block_images = {
    name: 'images',
    label: 'Liste d’images',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        images,
        background
    ]
}