import { heading } from '../fields/heading.js'
import { url } from '../fields/url.js'
import { value } from '../fields/value.js'
import { background } from '../fields/background.js'

export const block_newsletter = {
    name: 'newsletter',
    label: 'Newsletter',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        heading,
        {
            name: 'platform',
            label: 'Plateforme',
            widget: 'select',
            i18n: 'duplicate',
            options: [
                { label: 'Brevo (ex Sendinblue)', value: 'sendinblue' },
                { label: 'Mailchimp', value: 'mailchimp' }
            ],
            default: 'mailchimp'
        },
        {
            name: 'hiddens',
            label: 'Champ caché du formulaire',
            widget: 'list',
            i18n: true,
            collapsed: true,
            required: false,
            fields: [
                {
                    name: 'name',
                    label: 'Nom',
                    widget: 'string',
                    required: false,
                    i18n: 'duplicate'
                },
                value
            ]
        },
        url,
        background
    ]
}