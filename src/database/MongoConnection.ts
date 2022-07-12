import { config } from "Configs/Constants";
import mongoose from "mongoose";

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            //await mongoose.connect(config.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
            //await mongoose.createConnection(config.MONGO_CONNECTION).asPromise();
			console.log('Database connected')
        } catch (err) {
            console.error(err.message) 
        }
    }
}