import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { cta } from '../fields/cta.js'
import { image } from '../fields/image.js'

export const block_editorial = {
    name: 'editorial',
    label: 'Editorial',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        {
            name: 'direction',
            title: 'Direction',
            widget: 'select',
            options: [
                { label: 'texte à gauche / image à droite', value: 'ltr' },
                { label: 'image à gauche / texte à droite', value: 'rtl' }
            ]
        },
        text,
        cta,
        image
    ]
}