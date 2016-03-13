/**
 * Created by mengkeys on 2016-03-12.
 */
const crypto = require('crypto');
const moment = require('moment');
const WXUtils = {};

// sha1加密
WXUtils.sha1 = function (msg) {
    return crypto.createHash('sha1').update(msg).digest('hex');
};

// md5
WXUtils.md5 = function (msg) {
    return crypto.createHash('md5').update(msg).digest('hex');
};

// base64 加密
WXUtils.base64Encode = function (msg) {
    return new Buffer(msg,'base64').toString();
};

// base64 解密
WXUtils.base64Decode = function (msg) {
    return new Buffer(msg).toString('utf8');
};

WXUtils.timestamp = function () {
    return new Date().getTime();
};

WXUtils.timestampstr = function(){
	return moment().format('YYYYMMDDhhmmssSSS');
}

WXUtils.nonce = function () {
    var buf = crypto.randomBytes(32);
    var string = buf.toString('base64');
    string = string.replace(/\//g,'_').replace(/\+/g,'-');
    return string.substr(0, 32);
};

module.exports = WXUtils;