export const image = {
    name: 'image',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    media_library: {
        config: {
            max_file_size: 512000
        }
    },
    hint: '500Ko max, Compress image before send it: https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
}