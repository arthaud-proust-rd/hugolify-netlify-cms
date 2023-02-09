import { sublinks } from './sublinks.js'
import { title } from './title.js'
import { url } from './url.js'
import { blank } from './blank.js'

export const links = {
    name: 'links',
    label: 'Liens',
    label_singular: 'Lien',
    widget: 'list',
    i18n: true,
    required: false,
    fields: [
        title,
        url,
        blank,
        sublinks
    ]
}