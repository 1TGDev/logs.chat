// Package Info
const packageInfo = require('./package.json');
exports.name = packageInfo.name;
exports.version = packageInfo.version;
// Methods
exports.create = require('./methods/create');
exports.get = require('./methods/get');
exports.exists = require('./methods/exists');