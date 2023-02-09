import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'

const projects_tags = {
    name: 'projects_tags',
    label: 'Tags de projet',
    label_singular: 'Tag',
    folder: 'content/projects_tags',
    create: true,
    description: 'Toutes les tags de projets',

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]
}

export default projects_tags