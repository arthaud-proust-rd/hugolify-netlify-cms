import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { target } from '../fields/target.js'
import { featured_image } from '../fields/featured-image.js'
import { images } from '../fields/images.js'

const publications = {
    name: 'publications',
    label: 'Parutions',
    label_singular: 'Parution',
    folder: 'content/publications',
    create: true,

    editor: { preview: false },
    // preview_path: "/publications/",

    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',
    summary: '{{title}} — {{year}}',

    filter: { field: 'index', value: false },

    fields: [
        index,
        draft,
        date,
        title,
        description,
        target,
        featured_image,
        images
    ]
}

export default publications