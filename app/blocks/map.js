import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { map } from '../fields/map.js'
import { zoom } from '../fields/zoom.js'
import { background } from '../fields/background.js'

export const block_map = {
    name: 'map',
    label: 'Carte',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        text,
        map,
        zoom,
        background
    ]
}