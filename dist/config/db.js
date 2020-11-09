'use strict';

var _mongoose = require('mongoose');

(0, _mongoose.connect)('mongodb://127.0.0.1/pokedex', { useNewUrlParser: true, useUnifiedTopology: true });