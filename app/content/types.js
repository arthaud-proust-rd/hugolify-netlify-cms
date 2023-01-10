import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'

const types = {
    name: 'types',
    label: 'Types de projet',
    label_singular: 'Type',
    folder: 'content/types',
    create: true,
    description: 'Tous les types de projets',

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]

}

export default types