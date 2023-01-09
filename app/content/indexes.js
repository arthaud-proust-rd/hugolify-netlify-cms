import { isIndex } from '../fields/isindex.js'
import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { blocks } from '../blocks/blocks.js'

const indexes = {
    name: 'indexes',
    label: 'Rubriques',
    folder: 'content',
    create: false,
    description: 'La page principale de chaque rubrique',

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 3 },
    filter: { field: 'isIndex', value: true },
    summary: '{{title}}',

    fields: [
        isIndex,
        title,
        hero,
        blocks
    ]
}

export default indexes