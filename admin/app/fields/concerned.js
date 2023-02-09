export const concerned = {
    name: 'concerned',
    label: 'Personnes concernées ?',
    hint: 'Plusieurs personnes possible',
    widget: 'relation',
    collection: 'persons',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}