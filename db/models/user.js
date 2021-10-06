const { Model } = require('objection');
// access the user table
class User extends Model {
    static get tableName() {
            return 'user';
        }
    static get relationMappings(){
        const Channel = require('./channel');
        return {
            channel: {
                relation: Model.HasOneRelation,
                modelClass: Channel,
                join: {
                    from: 'user.channelid',
                    to: 'channel.id',
                },
            },
        };
    }
}

module.exports = User;