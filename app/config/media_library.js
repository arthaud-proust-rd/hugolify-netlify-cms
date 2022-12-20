// https://www.netlifycms.org/docs/uploadcare/
import { uploadcarePublicKey } from '../settings/uploadcare-public-key.js';

let media_library = {};
if (uploadcarePublicKey !== '') {
    media_library = {
        name: 'uploadcare',
        config: {
            publicKey: uploadcarePublicKey
        }
    };
}

export default media_library;
