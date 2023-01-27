import { title } from './title.js'
import { url } from './url.js'
import { blank } from './blank.js'

export const sublinks = {
    name: 'links',
    label: 'Liens',
    label_singular: 'Lien',
    widget: 'list',
    i18n: true,
    required: false,
    fields: [
        title,
        url,
        blank
    ]
}