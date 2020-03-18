const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
  badgeid: { type: Number, required: true },
  badgename: { type: String, required: true},
  badgeicon: { type: String, required: true },
  badgedesc: { type: String, required: true },
},
{ versionKey: false });

const BadgeModel = mongoose.model('BadgeModel', BadgeSchema);

module.exports.BadgeModel = BadgeModel;

const UserSchema = new Schema({
    userid: { type: String, required: true },
    badgesearned: { type: Array },
    collectionswatched: { type: Array },
    rewardpoints: { type: Number, default: 0 },
    rank: { type: Number, default: 1 },
    currcollectionid: { type: Number },
    currcollectionlevel: { type: Number },
},
{ versionKey: false });
  
const UserModel = mongoose.model('UserModel', UserSchema);

module.exports.UserModel = UserModel;