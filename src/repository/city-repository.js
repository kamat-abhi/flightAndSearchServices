const {City} = require('../models/index'); 
const { Op } = require('sequelize');

class CityRepository{
    async createCity({ name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        } catch(error){
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch(error){
            console.log("something went wrong in the repository layer");
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getAllCity(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where :{
                        name :{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const city = await City.findAll();
            return city;
        } catch (error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports = CityRepository;
