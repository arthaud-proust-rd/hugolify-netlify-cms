import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { value } from '../fields/value.js'
import { grid } from '../fields/grid.js'
import { background } from '../fields/background.js'

export const block_form = {
    name: 'form',
    label: 'Formulaire',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text,
        grid,
        { name: 'name', label: 'Identifiant du formulaire', widget: 'string', i18n: 'duplicate' },
        { name: 'submit', label: 'Texte du bouton d’envoie', widget: 'string', i18n: true },
        {
            name: 'items',
            label: 'Champs',
            label_singular: 'champ',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{label}}',
            fields: [
                { name: 'label', label: 'Label du champ', widget: 'string', i18n: true },
                {
                    name: 'type',
                    label: 'Type de champ',
                    widget: 'select',
                    i18n: 'duplicate',
                    options: [
                        { label: 'Email', value: 'email' },
                        { label: 'Select', value: 'select' },
                        { label: 'Téléphone', value: 'tel' },
                        { label: 'Texte', value: 'text' },
                        { label: 'Zone de texte', value: 'textarea' }
                    ],
                    default: 'text',
                },
                {
                    name: 'options',
                    label: 'Options',
                    label_singular: 'option',
                    hint: 'Pour un champ select seulement',
                    widget: 'list',
                    required: false,
                    i18n: true,
                    fields: [
                        title,
                        value
                    ],
                },
                { name: 'placeholder', label: 'Placeholder', widget: 'string', i18n: true, required: false },
                {
                    name: 'autocomplete',
                    label: 'Autocomplete',
                    widget: 'select',
                    i18n: 'duplicate',
                    required: false,
                    options: [
                        { label: 'Code postal', value: 'postal-code' },
                        { label: 'Email', value: 'email' },
                        { label: 'Nom complet', value: 'name' },
                        { label: 'Nom de famille', value: 'family-name' },
                        { label: 'Numéro et nom de la rue', value: 'street-address' },
                        { label: 'Pays', value: 'country-name' },
                        { label: 'Prénom', value: 'given-name' },
                        { label: 'Société', value: 'organization' },
                        { label: 'Téléphone', value: 'tel' },
                        { label: 'Zone de texte', value: 'textarea' }
                    ],
                    hint: 'Utilisé par le navigateur pour préremplir le champ',
                }
            ]
        },
        background
    ]
}