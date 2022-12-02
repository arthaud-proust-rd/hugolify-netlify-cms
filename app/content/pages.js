import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { featured_image } from '../fields/featured-image.js'
import { description } from '../fields/description.js'
import { body } from '../fields/body.js'
import { blocks } from '../blocks/blocks.js'

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
        title,
        description,
        featured_image,
        hero,
        body,
        blocks
    ]
}

export default pages