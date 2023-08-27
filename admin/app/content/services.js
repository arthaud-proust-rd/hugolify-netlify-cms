import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { body } from '../fields/body.js'
import { images } from '../fields/images.js'

const services = {
    name: 'services',
    label: 'Services',
    label_singular: 'Service',
    folder: 'content/services',
    create: true,

    editor: { preview: false },

    i18n: true,

    slug: '{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        featured_image,
        images,
        body
    ]

}

export default services