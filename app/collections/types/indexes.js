import { title } from '../fields/title.js'
import { hero } from '../blocks/hero.js'
import { blocks } from '../blocks/blocks.js'

const indexes = {
    name: 'indexes',
    label: 'Index des pages',
    folder: 'content',
    create: true,
    description: 'Toutes les pages principales',

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 3 },
    filter: { field: 'index', value: true },
    summary: '{{title}}',

    fields: [
        { name: 'index', label: 'Index', widget: 'hidden', default: true, required: false, i18n: 'duplicate' },
        title,
        hero,
        blocks
    ]
}

export default indexes