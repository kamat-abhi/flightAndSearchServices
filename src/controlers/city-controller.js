 const { CityService } = require('../services/index');
 const cityService = new CityService();

 const create = async(req, res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not abble to create a city',
            err: error
        });
    }
 }

 const destroy = async (req, res) => {
    try {
        const response = await cityService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not abble to delete a city',
            err: error
        });
    }
 }

 const get = async(req, res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully fetched  a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not abble to get a city',
            err: error
        });
    }
 }

 const update = async(req,res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not abble to create a city',
            err: error
        });
    }
 }

 const getAll = async(req, res) =>{
    try {
        const cities = await cityService.getAll(req.query);
        return res.status(201).json({
            data: cities,
            success: true,
            message: 'Successfully fetched  a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'not abble to get all city',
            err: error
        });
    }
 }

 module.exports = {
    create,
    destroy,
    get,
    update,
     getAll
 }