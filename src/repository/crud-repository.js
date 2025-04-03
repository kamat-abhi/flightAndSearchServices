const Apperror = require('../utils/app-error');
const { StatusCodes } = require('http-status-codes');

class CrudRepository{
    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async destroy(modelId){
        try {
            const response =  await this.model.destroy({
                where: {
                id: modelId
                }
            })
            if(!response){
                throw new Apperror('Not able to find resourse', StatusCodes.NOT_FOUND)
            }
            return response;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId);
            if (!result) {
                throw new Apperror('not able to find the resource', StatusCodes.NOT_FOUND); 
            }
            return result;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async update(modelId, data){
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository;