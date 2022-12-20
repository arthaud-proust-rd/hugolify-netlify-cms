export const image_src = {
    name: 'src',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    choose_url: false,
    media_library: {
        config: {
            max_file_size: 5000000
        }
    },
    hint: '5Mo max, Compresser l’image avant de l’envoyer : https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
};
