import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'
import {t} from "../i18n/translater.js";

const categories = {
    name: 'categories',
    label: t.content.categories.label,
    label_singular: t.content.categories.label_singular,
    folder: 'content/categories',
    create: true,
    description: t.content.categories.description,

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

export default categories