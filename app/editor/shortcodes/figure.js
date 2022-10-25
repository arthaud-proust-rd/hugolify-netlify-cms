/* global CMS */
CMS.registerEditorComponent({
    id: 'figure',
    label: 'Figure (image)',
    fields: [
        {
            name: 'src',
            label: 'Image',
            widget: 'image',
            media_library: {
                config: {
                    max_file_size: 512000
                }
            },
            hint: '500Ko max, Compresser l’image avant de l’envoyer : https://tinypng.com/',
            media_folder: '/assets/images/uploads',
            public_folder: '/images/uploads'
        },
        {
            name: 'alt',
            label: 'Texte alternatif',
            required: false,
            widget: 'string'
        },
        {
            name: 'link',
            label: 'Lien',
            required: false,
            widget: 'string'
        },
        {
            name: 'title',
            label: 'Légende',
            required: false,
            widget: 'string'
        },
        {
            name: 'credits',
            label: 'Crédits',
            required: false,
            widget: 'string'
        }
    ],
    pattern: /{{< figure (.*?) >}}/,
    fromBlock: function (match) {
        return {
            src: match[1],
            alt: match[2],
            link: match[3],
            title: match[4],
            credits: match[5]
        };
    },
    toBlock: function (obj) {
        return `{{< figure src="${obj.src}" alt="${obj.alt}" link="${obj.link}" title="${obj.title}" credits="${obj.credits}" >}}`;
    },
    toPreview: function (obj) {
        return `{{< figure src="${obj.src}" alt="${obj.alt}" link="${obj.link}" title="${obj.title}" credits="${obj.credits}" >}}`;
    }
});
