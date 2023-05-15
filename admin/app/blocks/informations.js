import { heading } from '../fields/heading.js'
import { icons } from '../fields/icons.js'
import { image_src } from '../fields/image-src.js'
import { image_alt } from '../fields/image-alt.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { cta } from '../fields/cta.js'
import { column } from '../fields/column.js'
import { background } from '../fields/background.js'

export const block_informations = {
    name: 'informations',
    label: 'Blocs carte d’information (en colonne)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        column,
        {
            name: 'items',
            label: 'Infos',
            label_singular: 'info',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                icons,
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
                        { name: 'isLogo', label: 'Est-ce un logo ou une icône ?', widget: 'boolean', required: false, hint: 'Pour centrer l’image dans une case', i18n: 'duplicate' }
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