import { index } from '../partials/index.js'
import { title } from '../partials/title.js'

const categories = {
    name: 'categories',
    label: 'Categories',
    label_singular: 'Categorie',
    folder: 'content/categories',
    create: true,

    editor: { preview: false },
    // preview_path: "/categories/",

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

export default categories