export const offices = {
    name: 'items',
    label: t.fields.offices_items,
    widget: 'relation',
    collection: 'offices',
    search_fields: ['title'],
    value_field: '{{filename}}',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}