import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { types } from '../fields/types.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { body } from '../fields/body.js'
import { images } from '../fields/images.js'

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
        types,
        featured_image,
        description,
        images,
        body
    ]

}

export default projects