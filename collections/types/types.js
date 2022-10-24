import { index } from '../partials/index.js'
import { title } from '../partials/title.js'

const types = {
    name: 'types',
    label: 'Types de projet',
    label_singular: 'Type',
    folder: 'content/types',
    create: true,

    editor: { preview: false },
    // preview_path: "/types/",

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

export default types