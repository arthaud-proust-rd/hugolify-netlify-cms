import { availableSections } from '../settings/available-sections.js';
import {t} from "../i18n/translater.js";

export const section = {
    name: 'section',
    label: t.fields.section,
    widget: 'select',
    options: availableSections,
    required: true,
    i18n: 'duplicate'
}