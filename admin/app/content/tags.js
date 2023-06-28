import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'

const tags = {
    name: 'tags',
    label: 'Tags',
    label_singular: 'Tag',
    folder: 'content/tags',
    create: true,
    description: 'Toutes les tags d’actualités',

    editor: { preview: false },

    i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]
}

export default tags