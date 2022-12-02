export const grid = {
    name: 'grid',
    label: 'Largeur sur la grille',
    widget: 'select',
    options: [
        { label: 'Petit', value: 'small' },
        { label: 'Moyen', value: 'medium' },
        { label: 'Large', value: 'large' }
    ],
    default: 'large',
    required: true,
    i18n: 'duplicate'
}