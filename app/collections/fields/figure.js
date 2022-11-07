import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'
import { legend } from './legend.js'
import { credit } from './credit.js'

export const figure = {
    name: 'figure',
    label: 'Image avec légende',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        image_src,
        image_alt,
        legend,
        credit
    ]
}