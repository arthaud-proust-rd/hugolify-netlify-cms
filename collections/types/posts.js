import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { date } from '../partials/date.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { image } from '../partials/image.js'
import { body } from '../partials/body.js'

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

    filter: { field: 'index', value: false },

    fields: [

        index,
        draft,
        title,
        date,
        { name: 'categories', label: 'Categories', widget: 'relation', collection: 'categories', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        { name: 'authors', label: 'Authors', widget: 'relation', collection: 'authors', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        image,
        description,
        body
    ]
}

export default posts