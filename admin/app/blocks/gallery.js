import { heading } from '../fields/heading.js';
import { column } from '../fields/column.js';
import { gallery } from '../fields/gallery.js';
import { background } from '../fields/background.js';

export const block_gallery = {
    name: 'gallery',
    label: 'Galerie d’images',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        column,
        gallery,
        background
    ]
};
