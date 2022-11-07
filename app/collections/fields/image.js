import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'

export const image = {
    name: 'image',
    label: 'Image',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        image_src,
        image_alt
    ]
}