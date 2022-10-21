import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'

const authors = {
    name: 'authors',
    label: 'Auteurs',
    label_singular: 'Auteur',
    folder: 'content/authors',
    create: true,

    editor: { preview: false },
    // preview_path: "/authors/",

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'index', value: false },

    fields: [

        index,
        draft,
        title,
        image,
        { name: 'description', label: 'Description', widget: 'text', required: false, i18n: true },
        { name: 'email', label: 'Email', widget: 'string', required: false, i18n: 'duplicate' },
        { name: 'twitter', label: 'Twitter', widget: 'string', required: false, i18n: 'duplicate', hint: 'Username' },
        { name: 'website', label: 'Site web', widget: 'string', required: false, i18n: 'duplicate' }

    ]

  }

export default authors