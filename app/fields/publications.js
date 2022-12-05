export const publications = {
    name: 'items',
    label: 'Parutions',
    widget: 'relation',
    collection: 'publications',
    multiple: true,
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}