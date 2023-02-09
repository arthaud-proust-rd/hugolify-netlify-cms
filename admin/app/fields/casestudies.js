export const casestudies = {
    name: 'items',
    label: 'Cas d’études',
    widget: 'relation',
    collection: 'casestudies',
    multiple: true,
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}