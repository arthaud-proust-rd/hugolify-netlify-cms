export const section = {
    name: 'section',
    label: 'Type de section',
    widget: 'select',
    options: [
        { label: 'Actualité', value: 'posts' },
        { label: 'Cas d’études', value: 'casestudies' },
        { label: 'Projet', value: 'projects' },
        { label: 'Parution', value: 'publications' }
    ],
    required: true,
    i18n: 'duplicate'
}