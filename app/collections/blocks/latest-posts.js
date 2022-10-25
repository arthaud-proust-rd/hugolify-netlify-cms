import { title } from '../partials/title.js'

export const latestposts = {
    name: 'latest-posts',
    label: 'Dernières actualités',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title
    ]
}