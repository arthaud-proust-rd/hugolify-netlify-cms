import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { date } from '../partials/date.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { url } from '../partials/url.js'
import { image } from '../partials/image.js'

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
        title,
        date,
        description,
        url,
        image
    ]
}

export default publications