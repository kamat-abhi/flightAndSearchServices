const  {FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.dapartureTime)) {
                throw{ error: 'arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw{error}
        }
    }

    async getFlight(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }
        catch (error){
            console.log("something went wrong at service layer");
            throw{error}
        }
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch(error){
            console.log("something went wrong in service  layer");
            throw{error};
        }
    }

    async updateFlight(flightId, data) {
        try{
            const flights = await this.flightRepository.updateFlights(flightId, data);
            return flights;
        } catch(error){
            console.log("something went wrong in service  layer");
            throw{error};
        }
    }
}


module.exports = FlightService;

