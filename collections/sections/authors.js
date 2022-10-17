const authors = {
    name: 'authors',
    label: 'Authors',
    label_singular: 'Author',
    folder: 'content/authors',
    create: true,

    editor: { preview: false },
    // preview_path: "/authors/",

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'index', value: false },

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' },
        { name: 'draft', label: 'Brouillon', widget: 'boolean', default: true, required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Nom', widget: 'string', i18n: true },
        { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' },
        { name: 'description', label: 'Description', widget: 'text', required: false, i18n: true },
        { name: 'email', label: 'Email', widget: 'string', required: false, i18n: 'duplicate' },
        { name: 'twitter', label: 'Twitter', widget: 'string', required: false, i18n: 'duplicate', hint: 'Username' },
        { name: 'website', label: 'Site web', widget: 'string', required: false, i18n: 'duplicate' }

    ]

  }

export default authors