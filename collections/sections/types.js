const types = {
    name: 'types',
    label: 'Types',
    label_singular: 'Type',
    folder: 'content/types',
    create: true,

    editor: { preview: false },
    // preview_path: "/types/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'index', value: false },

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Titre', widget: 'string', i18n: true }

    ]

}

export default types