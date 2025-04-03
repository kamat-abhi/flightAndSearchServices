const { AirportService } = require('../services/index');

const airportService = new AirportService();

const createAirport = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: 'successfully created a airport',
            err: {},
            data: response,
            success: true

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'cannot created a new airport'
        })
    }
}

async function getAllAirport() {
    try {
        const response = await airportService.getAll();
        return res.status(201).json({
            message: 'successfully created a airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'cannot get all airport'
        })
    }
}

module.exports = {
    createAirport,
    getAllAirport
}