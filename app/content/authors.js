import { isNotIndex } from '../fields/isnotindex.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { email } from '../fields/email.js'
import { website } from '../fields/website.js'
import { twitter } from '../fields/twitter.js'

const authors = {
    name: 'authors',
    label: 'Auteurs',
    label_singular: 'Auteur',
    folder: 'content/authors',
    create: true,
    description: 'Tous les auteurs d’actualités',

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'index', value: false },

    fields: [
        isNotIndex,
        draft,
        title,
        description,
        featured_image,
        email,
        twitter,
        website
    ]
}

export default authors