import { mediaLibrary } from '../settings/media-library.js';
let maxFileSize = 700000;
if (mediaLibrary) {
    maxFileSize = 5000000;
}

export const image_src = {
    name: 'src',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    choose_url: false,
    media_library: {
        config: {
            max_file_size: maxFileSize
        }
    },
    hint: 'Compresser l’image avant de l’envoyer : https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
};
