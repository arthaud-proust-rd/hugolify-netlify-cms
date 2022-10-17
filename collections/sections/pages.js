const pages = {
    name: 'pages',
    label: 'Pages',
    label_singular: 'Page',
    folder: 'content/pages',
    create: true,

    editor: { preview: false },
    // preview_path: "/pages/",

    // #i18n: true,

    slug: '{{slug}}',

    nested: { depth: 3 },

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' },
        { name: 'draft', label: 'Brouillon', widget: 'boolean', default: true, required: false, i18n: 'duplicate' },
        { name: 'layout', label: 'Layout', widget: 'select', options: ['blocks'], required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
        { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' },
        { name: 'description', label: 'Description',  widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true }

    ]

}

export default pages