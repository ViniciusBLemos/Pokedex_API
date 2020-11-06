import PokemonRepository from '../Repositories/pokemonsRepository';

export function getAll(req, res, next) {
    return res.json({});
}

export function getByTd(req, res, next) {
    return res.json({});
}

export function store(req, res, next) {
    return res.json({
        posts: [
            { tittle: 'First posts' },
            { tittle: 'Second posts' },
        ]
    });
}

export function edit(req, res, next) {
    return res.json({});
}

export function remove(req, res, next){
    return res.json({});
}
