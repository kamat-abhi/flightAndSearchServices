# Welcome to flight service
## Project Setup
- clone the project on your local
- Execute `npm install` on the root directory and add the following enviroment veriable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <your_db login name>,
    "password": <your db password>,
    "database": "Flights_Search_Db_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
- Once you added your db config as listed aboce , go to line the src folder from your terminal and execute `npx sequelize db:create`
```
## DB Design 
  - Airplane Table
  - Flight
  - City
  - Airpot

- A flight belong to an airplane but one airple can be used inmultiple flught
- A city has many airports but one airpot belong t a city