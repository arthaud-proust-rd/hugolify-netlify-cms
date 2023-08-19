import {t} from "../translations/translater.js";

export const address = {
    name: 'address',
    label: t.fields.address.label,
    widget: 'object',
    required: false,
    // i18n: true,
    collapsed: true,
    fields: [
        { name: 'street', label: t.fields.address.fields.street, widget: 'string', required: false },
        { name: 'zipcode', label: t.fields.address.fields.zipcode, widget: 'string', required: false },
        { name: 'city', label: t.fields.address.fields.city, widget: 'string', required: false },
        { name: 'country', label: t.fields.address.fields.country, widget: 'string', required: false }
    ]
}