import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'
import { legend } from './legend.js'
import { half } from './half.js'

export const images = {
    name: 'images',
    label: 'Images',
    widget: 'list',
    i18n: true,
    fields: [
        image_src,
        image_alt,
        legend,
        half
    ]
}