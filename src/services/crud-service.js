const { StatusCodes } = require("http-status-codes");
const Apperror = require("../utils/app-error");

class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }

    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            if(error.statusCode === StatusCodes.NOT_FOUND){
                throw new Apperror('the airplane you request to delete is not present ', error.statusCode);
            }
            throw new Apperror('cannot fetch data of  the airplane', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async get(id){
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            if(error.statusCode === StatusCodes.NOT_FOUND){
                throw new Apperror('the airplane you request is not present ', error.statusCode);
            }
            throw new Apperror('cannot fetch data of all the airplane', StatusCodes.INTERNAL_SERVER_ERROR);
            
        }
    }

    async update(id, data){
        try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
}

module.exports = CrudService;