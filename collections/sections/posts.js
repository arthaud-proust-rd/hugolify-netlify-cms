const posts = {
    name: 'posts',
    label: 'Posts',
    label_singular: 'Post',
    folder: 'content/posts',
    create: true,

    editor: { preview: false },
    // preview_path: "/news/",

    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' },
        { name: 'draft', label: 'Brouillon', widget: 'boolean', default: true, required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
        { name: 'date', label: 'Date de publication', widget: 'datetime', i18n: 'duplicate' },
        { name: 'categories', label: 'Categories', widget: 'relation', collection: 'categories', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        { name: 'authors', label: 'Authors', widget: 'relation', collection: 'authors', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' },
        { name: 'description', label: 'Description',  widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true }

    ]

}

export default posts