import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { image } from '../fields/image.js'
import {t} from "../translations/translater.js";

export const author = {
    name: 'author',
    title: t.fields.author,
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        text,
        image
    ]
}