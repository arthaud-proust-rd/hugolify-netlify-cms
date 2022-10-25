const menu = {
    name: 'menu',
    label: 'Menus',
    description: 'Tous les menus disponibles',

    editor: { preview: false },

    files: [

        {
            name: 'primary',
            label: 'Principal',
            file: 'data/menu/primary.yml',
            i18n: true,
            fields: [
                {
                    name: 'item',
                    label: 'Links',
                    widget: 'list',
                    i18n: true,
                    required: false,
                    fields: [
                        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
                        { name: 'link', label: 'Lien', widget: 'string', i18n: true },
                        { name: 'blank', label: 'Blank ?', widget: 'boolean', default: false, required: false, i18n: 'duplicate' }
                    ]
                }
            ]
        },
        {
            name: 'secondary',
            label: 'Secondaire',
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [
                {
                    name: 'item',
                    label: 'Links',
                    widget: 'list',
                    i18n: true,
                    required: false,
                    fields: [
                        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
                        { name: 'link', label: 'Lien', widget: 'string', i18n: true },
                        { name: 'blank', label: 'Blank ?', widget: 'boolean', default: false, required: false, i18n: 'duplicate' }
                    ]
                }
            ]
        },
        {
            name: 'legal',
            label: 'Légal',
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [
                {
                    name: 'item',
                    label: 'Links',
                    widget: 'list',
                    i18n: true,
                    required: false,
                    fields: [
                        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
                        { name: 'link', label: 'Lien', widget: 'string', i18n: true },
                        { name: 'blank', label: 'Blank ?', widget: 'boolean', default: false, required: false, i18n: 'duplicate' }
                    ]
                }
            ]
        },
        {
            name: 'social',
            label: 'Réseaux sociaux',
            file: 'data/menu/social.yml',
            i18n: true,
            fields: [
                {
                    name: 'item',
                    label: 'Links',
                    widget: 'list',
                    i18n: true,
                    required: false,
                    fields: [
                        { name: 'title', label: 'Titre', widget: 'string', i18n: true },
                        { name: 'link', label: 'Lien', widget: 'string', i18n: true },
                        { name: 'blank', label: 'Blank ?', widget: 'boolean', default: false, required: false, i18n: 'duplicate' }
                    ]
                }
            ]
        }

    ]

}

export default menu