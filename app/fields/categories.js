export const categories = {
    name: 'categories',
    label: 'Categories',
    widget: 'relation',
    collection: 'categories',
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}