import * as availableBlocks from '../settings/available-blocks.js';

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    collapsed: false,
    types: Object.values(availableBlocks),
    i18n: true
};
