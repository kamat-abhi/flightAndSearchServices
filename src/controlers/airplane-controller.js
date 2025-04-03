const { AirplaneService} = require('../services/index');
const {StatusCodes } = require('http-status-codes');

const airplaneService = new AirplaneService();

 async function createAirplane(req, res) {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            sucess:true,
            message: 'Successfylly create an airplane',
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucess:false,
            message: 'Somethins went wrong while craeting airplane',
            data: {},
            error: error
        })
    }
 }

 async function getAirplanes(req, res) {
    try {
        const airplane = await airplaneService.getAll();
        return res.status(StatusCodes.OK).json({
            sucess:true,
            message: 'Successfylly create an airplane',
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucess:false,
            message: 'Somethins went wrong while craeting airplane',
            data: {},
            error: error
        })
    }
 }

 async function getAirplane(req, res) {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            sucess:true,
            message: 'Successfylly create an airplane',
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucess:false,
            message: 'Somethins went wrong while craeting airplane',
            data: {},
            error: error
        })
    }
 }
 
 async function destroyAirplane(req, res) {
    try {
        const airplane = await airplaneService.destroy(req.params.id);
        return res.status(StatusCodes.OK).json({
            sucess:true,
            message: 'Successfylly delete an airplane',
            data: airplane,
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            sucess:false,
            message: 'Somethins went wrong while deleting airplane',
            data: {},
            error: error
        })
    }
 }
 

 module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
 }