import { title } from './title.js'
import { url } from './url.js'
import { blank } from './blank.js'

export const links = {
    name: 'links',
    label: 'Liens',
    widget: 'list',
    i18n: true,
    required: false,
    fields: [
        title,
        url,
        blank
    ]
}