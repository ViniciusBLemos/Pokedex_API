'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAll = getAll;
exports.getByTd = getByTd;
exports.store = store;
exports.edit = edit;
exports.remove = remove;

var _pokemonsRepository = require('../Repositories/pokemonsRepository');

var _pokemonsRepository2 = _interopRequireDefault(_pokemonsRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAll(req, res, next) {
    return res.json({});
}

function getByTd(req, res, next) {
    return res.json({});
}

function store(req, res, next) {
    return res.json({
        posts: [{ tittle: 'First posts' }, { tittle: 'Second posts' }]
    });
}

function edit(req, res, next) {
    return res.json({});
}

function remove(req, res, next) {
    return res.json({});
}