export const services = {
    name: 'items',
    label: 'Services',
    widget: 'relation',
    collection: 'services',
    multiple: true,
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}