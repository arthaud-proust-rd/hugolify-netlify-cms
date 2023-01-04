import { title } from '../fields/title.js'
import { posts } from '../fields/posts.js'
import { show_more } from '../fields/show-more.js'
import { background } from '../fields/background.js'

export const block_selectedposts = {
    name: 'selected-posts',
    label: 'Selection d’actualités',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        { name: 'section', default: 'posts', widget: 'hidden' },
        posts,
        show_more,
        background
    ]
}