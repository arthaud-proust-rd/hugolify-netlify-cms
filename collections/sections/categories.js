const categories = {
    name: 'categories',
    label: 'Categories',
    label_singular: 'Category',
    folder: 'content/categories',
    create: true,

    editor: { preview: false },
    // preview_path: "/categories/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'index', value: false },

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' }

    ]

}

export default categories