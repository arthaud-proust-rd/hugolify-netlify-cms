import { heading } from '../fields/heading.js'
import { chart } from '../fields/chart.js'
import { grid } from '../fields/grid.js'
import { background } from '../fields/background.js'

export const block_chart =  {
    name: 'chart',
    label: 'Graphique (Camembert, barre…)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        chart,
        grid,
        background
    ]
}