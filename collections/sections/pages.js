import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'

const pages = {
    name: 'pages',
    label: 'Pages',
    label_singular: 'Page',
    folder: 'content/pages',
    create: true,

    editor: { preview: false },
    // preview_path: "/pages/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 3 },

    fields: [

        index,
        draft,
        { name: 'layout', label: 'Layout', widget: 'select', options: ['blocks'], required: false, i18n: 'duplicate' },
        title,
        image,
        { name: 'description', label: 'Description',  widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true }

    ]

}

export default pages