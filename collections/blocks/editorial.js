import { title } from '../partials/title.js'
import { text } from '../partials/text.js'
import { cta } from './cta.js'
import { image } from '../partials/image.js'

export const editorial = {
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