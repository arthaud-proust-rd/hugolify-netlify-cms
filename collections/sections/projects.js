import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'

const projects = {
    name: 'projects',
    label: 'Projets',
    label_singular: 'Projet',
    folder: 'content/projects',
    create: true,

    editor: { preview: false },
    // preview_path: "/projects/",

    // #i18n: true,

    slug: '{{year}}-{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'index', value: false },

    fields: [

        index,
        draft,
        title,
        { name: 'date', label: 'Date de publication', widget: 'datetime', i18n: 'duplicate' },
        { name: 'types', label: 'Types', widget: 'relation', collection: 'types', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        image,
        { name: 'description', label: 'Description', widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true },
        {
            name: 'images',
            label: 'Images',
            widget: 'list',
            i18n: true,
            fields: [
                { name: 'string', label: 'Titre', widget: 'string', required: false, i18n: true },
                image
            ]
        },
    ]

}

export default projects