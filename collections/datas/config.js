const config = {
    name: 'config',
    label: 'Config',

    editor: { preview: false },

    files: [

        {
            name: 'seo',
            label: 'SEO',
            file: 'data/seo.yml',
            i18n: true,
            fields: [
                { name: 'title', label: 'Nom du site', widget: 'string', i18n: true },
                { name: 'description', label: 'Description', widget: 'text', required: false, i18n: true },
                { name: 'image', label: 'Image', widget: 'image', required: false, i18n: 'duplicate', media_library: { config: { max_file_size: 512000 } }, hint: '500Ko max, Compress image before send it: https://tinypng.com/', media_folder: '/assets/images/uploads', public_folder: '/images/uploads' }
            ]
        }

    ]

}

export default config