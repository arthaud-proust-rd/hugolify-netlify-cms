import { heading } from '../fields/heading.js'
import { cta } from '../fields/cta.js'
import { background } from '../fields/background.js'
import {t} from "../i18n/translater.js";

export const block_cta =  {
    name: 'cta',
    label: t.blocks.cta,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{cta.text}}',
    fields: [
        heading,
        cta,
        background
    ]
}