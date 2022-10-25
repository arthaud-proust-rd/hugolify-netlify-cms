import { title } from '../partials/title.js'
import { text } from '../partials/text.js'
import { image } from '../partials/image.js'

export const blockquote = {
    name: 'blockquote',
    label: 'Bloc citation',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        text,
        {
            name: 'author',
            title: 'Auteur',
            widget: 'object',
            required: false,
            i18n: true,
            collapsed: true,
            fields: [
                title,
                text,
                image
            ]
        },
    ]
}