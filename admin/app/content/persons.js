import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'
import {t} from "../i18n/translater.js";

const persons = {
    name: 'persons',
    label: t.content.persons.label,
    label_singular: t.content.persons.label_singular,
    folder: 'content/persons',
    create: true,
    description: t.content.persons.description,

    editor: { preview: false },

    i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        title,
        description,
        featured_image,
        contact,
        body
    ]
}

export default persons