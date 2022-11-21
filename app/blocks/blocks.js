// Available blocks
import { availableBlocks } from '../../settings.js'

// import all blocks
import { block_alert } from './alert.js'
import { block_cta } from './cta.js'
import { block_quote } from './quote.js'
import { block_editorial } from './editorial.js'
import { block_embed } from './embed.js'
import { block_figure } from './figure.js'
import { block_gauges } from './gauges.js'
import { block_images } from './images.js'
import { block_gallery } from './gallery.js'
import { block_infos } from './infos.js'
import { block_latest } from './latest.js'
import { block_map } from './map.js'
import { block_paragraph } from './paragraph.js'
import { block_selectedprojects } from './selected-projects.js'
import { block_title } from './title.js'

// add selected blocks
const selectedBlocks = [];
availableBlocks.forEach(element => {
    if (availableBlocks.includes(element)) {
        selectedBlocks.push(eval('block_' + element));
    }
});

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    types: selectedBlocks
};
