const multer = require('multer');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};

const fileUpload = multer({
    limit: {
        fileSize: 1024 * 1024 * 2
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads/images')
        },
        filename: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype]
            cb(null, Date.now() + '.' + ext)
        },
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        const error = isValid ? null : new Error('Invalid file type')
        cb(error, isValid)
    }
});

module.exports = fileUpload;
