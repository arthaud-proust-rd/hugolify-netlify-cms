// This global flag enables manual initialization.
// import CMS, { init } from 'netlify-cms'
const { CMS, initCMS: init } = window;

// Widgets
const parentWidget = window.NetlifyCmsWidgetParent;
CMS.registerWidget('parent', parentWidget.control, parentWidget.preview);

// Import config
import config from './app/config.js';

// Import all shortcodes for editor
import './app/editor/index.js';

// Init
init({ config });
