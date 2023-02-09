import { availableSections } from '../settings/available-sections.js';

export const section = {
    name: 'section',
    label: 'Type de section',
    widget: 'select',
    options: availableSections,
    required: true,
    i18n: 'duplicate'
}