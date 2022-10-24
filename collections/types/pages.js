import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'
import { description } from '../partials/description.js'
import { body } from '../partials/body.js'

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
        description,
        body
    ]
}

export default pages