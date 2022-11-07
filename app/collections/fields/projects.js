export const projects = {
    name: 'projects',
    label: 'Projets',
    widget: 'relation',
    collection: 'projects',
    multiple: true,
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}