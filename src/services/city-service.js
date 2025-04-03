const CrudService = require('./crud-service');
const { CityRepository} = require('../repository/index');

class CityService extends CrudService {
    constructor() {
        const cityService = new CityRepository();
        super(cityService);
    }
}

module.exports = CityService;