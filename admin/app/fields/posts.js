export const posts = {
    name: 'items',
    label: 'Actualités',
    widget: 'relation',
    collection: 'posts',
    multiple: true,
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}