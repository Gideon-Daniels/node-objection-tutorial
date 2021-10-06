const { Model } = require('objection');
// access the channel table
class Channel extends Model {
    static get tableName() {
            return 'channel';
        }
    }

    module.exports = Channel;