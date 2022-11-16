import { map } from '../fields/map.js'

export const block_map = {
    name: 'map',
    label: 'Carte',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        map
    ]
}