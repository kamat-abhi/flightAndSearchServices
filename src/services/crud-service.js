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
            console.log("something went wrong in crud service");
            throw error;
        }
    }
    async get(id){
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.update(id,data);
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