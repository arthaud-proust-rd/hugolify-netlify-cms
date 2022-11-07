import { block_cta } from './cta.js'
import { block_blockquote } from './blockquote.js'
import { block_editorial } from './editorial.js'
import { block_figure } from './figure.js'
import { block_latestposts } from './latest-posts.js'
import { block_latestprojects } from './latest-projects.js'
import { block_title } from './title.js'

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    types: [
        block_cta,
        block_blockquote,
        block_editorial,
        block_figure,
        block_latestposts,
        block_latestprojects,
        block_title
    ]
}
