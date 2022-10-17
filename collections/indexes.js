const indexes = {
    name: 'indexes',
    label: 'Index pages',
    folder: 'content',
    create: true,

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 3 },
    filter: { field: 'index', value: true },
    summary: '{{title}} ({{dirname}})',

    fields: [

        { name: 'index', label: 'Index', widget: 'hidden', default: true, required: false, i18n: 'duplicate' },
        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
        {
            name: 'hero',
            label: 'Hero',
            widget: 'object',
            required: false,
            i18n: true,
            collapsed: true,
            fields: [
                {
                    name: 'title',
                    label: 'Titre',
                    widget: 'string',
                    i18n: true
                },
                {
                    name: 'text',
                    label: 'Texte',
                    widget: 'string',
                    required: false,
                    i18n: true
                },
                {
                    name: 'cta',
                    label: 'CTA',
                    widget: 'object',
                    required: false,
                    i18n: true,
                    fields: [
                        {
                            name: 'text',
                            label: 'Texte',
                            widget: 'string',
                            i18n: true
                        },
                        {
                            name: 'url',
                            label: 'URL',
                            widget: 'string',
                            i18n: true
                        }
                    ]
                },
                {
                    name: 'image',
                    label: 'Image',
                    widget: 'image',
                    required: false,
                    i18n: 'duplicate',
                    media_library: {
                        config: { max_file_size: 512000 }
                    },
                    hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads'
                }
            ]
        }
    ]

}

export default indexes