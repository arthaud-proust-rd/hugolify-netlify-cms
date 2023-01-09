import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { blocks } from '../blocks/blocks.js'

const casestudies = {
    name: 'casestudies',
    label: 'Cas d’études',
    label_singular: 'Cas d’étude',
    folder: 'content/casestudies',
    create: true,

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'index', value: false },

    fields: [
        { name: 'layout', widget: 'hidden', default: 'blocks' },
        index,
        draft,
        date,
        title,
        description,
        featured_image,
        hero,
        blocks
    ]

}

export default casestudies