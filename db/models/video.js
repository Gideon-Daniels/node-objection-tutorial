const { Model } = require('objection');
// access the video table
class Video extends Model {
    static get tableName() {
            return 'video';
        }
    }

module.exports = Video;


