import { surtitle } from './surtitle.js'
import { title } from './title.js'
import { text_markdown } from './text-markdown.js'
import { cta } from './cta.js'
import { cta_second } from './cta_second.js'
import { align } from './align.js'
import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'
import { darken } from './darken.js'

export const hero = {
    name: 'hero',
    label: 'Hero',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        surtitle,
        title,
        text_markdown,
        cta,
        cta_second,
        align,
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
                darken,
                { label: 'Image de fond ?', widget: 'boolean', name: 'background_image', required: false }
            ]
        }
    ]
}