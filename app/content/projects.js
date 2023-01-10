import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { types } from '../fields/types.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { datas } from '../fields/datas.js'
import { body } from '../fields/body.js'
import { images } from '../fields/images.js'

const projects = {
    name: 'projects',
    label: 'Projets',
    label_singular: 'Projet',
    folder: 'content/projects',
    create: true,

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        types,
        featured_image,
        datas,
        images,
        body
    ]

}

export default projects