import { title } from '../partials/title.js'
import { hero } from '../partials/hero.js'

const indexes = {
    name: 'indexes',
    label: 'Index des pages',
    folder: 'content',
    create: true,

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 3 },
    filter: { field: 'index', value: true },
    summary: '{{title}} ({{dirname}})',

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: true, required: false, i18n: 'duplicate' },
        title,
        hero
    ]

}

export default indexes