import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'

const posts = {
    name: 'posts',
    label: 'Actualités',
    label_singular: 'Actualité',
    folder: 'content/posts',
    create: true,

    editor: { preview: false },
    // preview_path: "/news/",

    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',
    summary: '{{title}} — {{year}}/{{month}}/{{day}}',

    fields: [

        index,
        draft,
        title,
        { name: 'date', label: 'Date de publication', widget: 'datetime', i18n: 'duplicate' },
        { name: 'categories', label: 'Categories', widget: 'relation', collection: 'categories', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        { name: 'authors', label: 'Authors', widget: 'relation', collection: 'authors', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        image,
        { name: 'description', label: 'Description',  widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true }

    ]

}

export default posts