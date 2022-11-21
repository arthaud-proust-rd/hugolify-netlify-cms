export const state = {
    name: 'state',
    label: 'État',
    widget: 'select',
    options: [
        { label: 'Normal', value: 'light' },
        { label: 'Informatif', value: 'warning' },
        { label: 'Important', value: 'danger' }
    ],
    default: 'light',
    required: true,
    i18n: 'duplicate'
}