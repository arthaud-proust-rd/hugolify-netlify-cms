import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { date } from '../partials/date.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { image } from '../partials/image.js'
import { body } from '../partials/body.js'

import { images } from '../blocks/images.js'

const projects = {
    name: 'projects',
    label: 'Projets',
    label_singular: 'Projet',
    folder: 'content/projects',
    create: true,

    editor: { preview: false },
    // preview_path: "/projects/",

    // #i18n: true,

    slug: '{{year}}-{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'index', value: false },

    fields: [

        index,
        draft,
        title,
        date,
        { name: 'types', label: 'Types', widget: 'relation', collection: 'types', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        image,
        description,
        images,
        body
    ]

}

export default projects