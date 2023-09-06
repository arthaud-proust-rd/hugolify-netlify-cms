import { heading } from '../fields/heading.js'
import { offices } from '../fields/offices-items.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'
import {t} from "../i18n/translater.js";

export const block_selectedoffices = {
    name: 'selected-offices',
    label: t.blocks.selectedoffices,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        heading,
        { name: 'section', default: 'offices', widget: 'hidden' },
        offices,
        show_more,
        background
    ]
}