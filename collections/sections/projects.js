const projects = {
    name: 'projects',
    label: 'Project',
    label_singular: 'Project',
    folder: 'content/projects',
    create: true,

    editor: { preview: false },
    // preview_path: "/projects/",

    // #i18n: true,

    slug: '{{year}}-{{slug}}',
    path: '{{year}}/{{slug}}',

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: false, required: false, i18n: 'duplicate' },
        { name: 'draft', label: 'Brouillon', widget: 'boolean', default: true, required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
        { name: 'date', label: 'Date de publication', widget: 'datetime', i18n: 'duplicate' },
        { name: 'types', label: 'Types', widget: 'relation', collection: 'types', search_fields: ['title'], value_field: '{{slug}}', display_fields: ['title'], required: false },
        { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' },
        { name: 'description', label: 'Description',  widget: 'text', required: false, i18n: true },
        { name: 'body', label: 'Contenu', widget: 'markdown', required: false, i18n: true }

    ]

}

export default projects