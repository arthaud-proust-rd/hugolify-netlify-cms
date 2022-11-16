import { background } from '../fields/background.js'
import { title } from '../fields/title.js'
import { projects } from '../fields/projects.js'

export const block_selectedprojects = {
    name: 'selected-projects',
    label: 'Projets sélectionnés',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{title}}',
    fields: [
        title,
        projects,
        background
    ]
}