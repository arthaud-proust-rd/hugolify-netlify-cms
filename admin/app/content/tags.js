import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'
import {t} from "../i18n/translater.js";

const tags = {
    name: 'tags',
    label: t.content.tags.label,
    label_singular: t.content.tags.label_singular,
    folder: 'content/tags',
    create: true,
    description: t.content.tags.description,

    editor: { preview: false },

    i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]
}

export default tags