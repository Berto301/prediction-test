require("dotenv").config();
const routes = require('./routers');
const mongoose = require('mongoose')
const express =  require("express")
const dbConfig = require("./config/db.config");
export default class Server{
    readonly port: number;
    constructor(port: number){
        this.port = port
    }
    async start(){
        const app = express()
        app.use('/api', routes)
        await mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            }).then(()=>{
                console.log("Successfully connect to MongoDB.");
            });
        app.listen(this.port, function(port:number){
            console.log("Server is running on port "+process.env.APP_PORT)
        })
    }
}