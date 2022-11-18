export const image_src = {
    name: 'src',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    media_library: {
        config: {
            max_file_size: 600000
        }
    },
    hint: '600Ko max, Compresser l’image avant de l’envoyer : https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
}