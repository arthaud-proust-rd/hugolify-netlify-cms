export const align = {
    name: 'align',
    label: 'Alignement du texte',
    widget: 'select',
    options: [
        { label: 'à gauche', value: 'start' },
        { label: 'à droite', value: 'end' },
        { label: 'au centre', value: 'center' }
    ],
    default: 'start',
    required: false,
    i18n: 'duplicate'
}