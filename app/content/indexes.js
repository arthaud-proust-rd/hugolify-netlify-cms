import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { blocks } from '../blocks/blocks.js'

const indexes = {
    name: 'indexes',
    label: 'Rubriques',
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