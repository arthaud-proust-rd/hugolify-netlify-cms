import { block_cta } from './cta.js'
import { block_blockquote } from './blockquote.js'
import { block_editorial } from './editorial.js'
import { block_embed } from './embed.js'
import { block_figure } from './figure.js'
import { block_gauges } from './gauges.js'
import { block_infos } from './infos.js'
import { block_latestposts } from './latest-posts.js'
import { block_latestprojects } from './latest-projects.js'
import { block_map } from './map.js'
import { block_paragraph } from './paragraph.js'
import { block_selectedprojects } from './selected-projects.js'
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
        block_embed,
        block_figure,
        block_gauges,
        block_infos,
        block_latestposts,
        block_latestprojects,
        block_map,
        block_paragraph,
        block_selectedprojects,
        block_title
    ]
}
