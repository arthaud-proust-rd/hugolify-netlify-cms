import news from './collections/news.js';

// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true
const { CMS, initCMS: init } = window

init({
  config:{
    backend:{
      name: 'github',
      branch: 'main',
    },

    load_config_file: false,
    media_folder: "assets/images",
    public_folder: "/images",

    collections: [
      news
    ]
  }
})