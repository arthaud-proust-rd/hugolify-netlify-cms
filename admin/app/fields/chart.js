import { title } from '../fields/title.js'

export const chart = {
    name: 'chart',
    label: 'Graphique',
    widget: 'object',
    fields: [
        title,
        { 
            name: 'type',
            label: 'type',
            widget: 'select',
            multiple: false,
            options: [
                { label: "Barre", value: "bar" },
                { label: "Camembert", value: "pie" },
                { label: "Ligne", value: "line" },
                { label: "Zone polaire", value: "polarArea" },
                { label: "Radar", value: "radar" }
            ],
            default: ['bar']
        },
        {
            name: 'items',
            label: 'Données',
            widget: 'list',
            i18n: true,
            fields: [
                { name: 'label', label: 'Label', widget: 'string', i18n: true },
                { name: 'value', label: 'Valeur', widget: 'number', i18n: 'duplicate' },
                { name: 'color', label: 'Couleur', widget: 'color', allowInput: true, enableAlpha: true, required: false, i18n: 'duplicate' }
            ]
        },
        { 
            name: 'data', 
            label: 'Données en mode expert', 
            widget: 'code', 
            required: false, 
            i18n: 'duplicate', 
            hint: 'Documentation: https://www.chartjs.org/docs/', 
            default_language: 'JSON'
        }
    ]
}
