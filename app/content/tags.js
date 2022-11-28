import { index } from '../fields/index.js'
import { title } from '../fields/title.js'

const tags = {
    name: 'tags',
    label: 'Tags',
    label_singular: 'Tag',
    folder: 'content/tags',
    create: true,
    description: 'Toutes les tags d’actualités',

    editor: { preview: false },
    // preview_path: "/tags/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'index', value: false },

    fields: [
        index,
        title
    ]
}

export default tags